import {
  type ContentfulClientApi,
  type CreateClientParams,
  type Entry,
  type EntryCollection,
  createClient,
} from 'contentful'
import type { EntrySkeletonType } from 'contentful/dist/types/types/query'

class ContentfulConnector {
  private readonly contentfulClient: ContentfulClientApi<undefined>

  constructor(createClientParams: CreateClientParams) {
    this.contentfulClient = createClient(createClientParams)
  }

  public async getEntries<T extends EntrySkeletonType>(query: object): Promise<EntryCollection<T, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return this.contentfulClient.withoutUnresolvableLinks.getEntries<T>(query)
  }

  public async getEntry<T extends EntrySkeletonType>(id: string, query: object): Promise<Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return this.contentfulClient.withoutUnresolvableLinks.getEntry<T>(id, query)
  }
}

/**
 * We have some typing related issues here because this code could potentially be executed in the browser.
 * Is there a way to make this work only on the server? Need more Nuxt insights here. For now I am just ignoring it as
 * useAsyncData is only executed on the server.
 */
function getContentfulConnector(space: 'marketing' | 'masterdata'): ContentfulConnector {
  if (space === 'marketing') {
    return new ContentfulConnector({
      space: process.env.CTF_MARKETING_SPACE_ID!,
      accessToken: process.env.CTF_MARKETING_CDA_ACCESS_TOKEN!,
      environment: process.env.CTF_ENVIRONMENT,
      headers: {
        'x-contentful-resource-resolution': getMasterDataResolutionHeader(),
      },
    })
  }
  else {
    return new ContentfulConnector({
      space: process.env.CTF_MASTER_DATA_SPACE_ID!,
      accessToken: process.env.CTF_MASTER_DATA_CDA_ACCESS_TOKEN!,
      environment: process.env.CTF_ENVIRONMENT,
    })
  }
}

function getMasterDataResolutionHeader() {
  return Buffer.from(JSON.stringify({
    spaces: {
      [process.env.CTF_MARKETING_SPACE_ID]: process.env.CTF_MARKETING_CDA_ACCESS_TOKEN,
      [process.env.CTF_MASTER_DATA_SPACE_ID]: process.env.CTF_MASTER_DATA_CDA_ACCESS_TOKEN,
    },
  })).toString('base64')
}

export { getContentfulConnector }
