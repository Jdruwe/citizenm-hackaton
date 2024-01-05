import {
  type ContentfulClientApi,
  type Entry,
  type EntryCollection,
  createClient,
} from 'contentful'
import type { EntrySkeletonType } from 'contentful/dist/types/types/query'

class ContentfulConnector {
  private readonly contentfulClient: ContentfulClientApi<undefined>

  constructor(space: string, accessToken: string) {
    this.contentfulClient = createClient({
      space,
      accessToken,
      environment: process.env.CTF_ENVIRONMENT,
    })
  }

  public async getEntries<T extends EntrySkeletonType>(query: object): Promise<EntryCollection<T, undefined, string>> {
    return this.contentfulClient.getEntries<T>(query)
  }

  public async getEntry<T extends EntrySkeletonType>(id: string, query: object): Promise<Entry<T, undefined, string>> {
    return this.contentfulClient.getEntry<T>(id, query)
  }
}

function getContentfulConnector(space: 'marketing' | 'masterdata'): ContentfulConnector {
  if (space === 'marketing') {
    return new ContentfulConnector(process.env.CTF_MARKETING_SPACE_ID!, process.env.CTF_MARKETING_CDA_ACCESS_TOKEN!)
  }
  else {
    return new ContentfulConnector(process.env.CTF_MASTER_DATA_SPACE_ID!, process.env.CTF_MASTER_DATA_CDA_ACCESS_TOKEN!)
  }
}

export { getContentfulConnector }
