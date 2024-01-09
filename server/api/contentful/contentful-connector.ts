import * as contentful from 'contentful'
import type { EntrySkeletonType } from 'contentful/dist/types/types/query'
import type { NitroRuntimeConfig } from 'nitropack'

class ContentfulConnector {
  private readonly contentfulClient: contentful.ContentfulClientApi<undefined>

  constructor(createClientParams: contentful.CreateClientParams) {
    // @ts-expect-error: https://github.com/contentful/contentful.js/issues/1233
    this.contentfulClient = contentful.createClient ? contentful.createClient(createClientParams) : contentful.default.createClient(createClientParams)
  }

  public async getEntries<T extends EntrySkeletonType>(query: object): Promise<contentful.EntryCollection<T, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return this.contentfulClient.withoutUnresolvableLinks.getEntries<T>(query)
  }

  public async getEntry<T extends EntrySkeletonType>(id: string, query: object): Promise<contentful.Entry<T, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return this.contentfulClient.withoutUnresolvableLinks.getEntry<T>(id, query)
  }
}

let marketingConnector: ContentfulConnector | undefined
let masterDataConnector: ContentfulConnector | undefined

function getContentfulConnector(space: 'marketing' | 'masterdata', config: NitroRuntimeConfig): ContentfulConnector {
  if (space === 'marketing') {
    if (marketingConnector) {
      return marketingConnector
    }
    else {
      marketingConnector = new ContentfulConnector({
        space: config.CTF_MARKETING_SPACE_ID,
        accessToken: config.CTF_MARKETING_CDA_ACCESS_TOKEN,
        environment: config.CTF_ENVIRONMENT,
        headers: {
          'x-contentful-resource-resolution': getMasterDataResolutionHeader(config),
        },
      })
    }
    return marketingConnector
  }
  else {
    if (masterDataConnector) {
      return masterDataConnector
    }
    else {
      masterDataConnector = new ContentfulConnector({
        space: config.CTF_MASTER_DATA_SPACE_ID,
        accessToken: config.CTF_MASTER_DATA_CDA_ACCESS_TOKEN,
        environment: config.CTF_ENVIRONMENT,
      })
    }
    return masterDataConnector
  }
}

function getMasterDataResolutionHeader(config: NitroRuntimeConfig) {
  return Buffer.from(JSON.stringify({
    spaces: {
      [config.CTF_MARKETING_SPACE_ID]: config.CTF_MARKETING_CDA_ACCESS_TOKEN,
      [config.CTF_MASTER_DATA_SPACE_ID]: config.CTF_MASTER_DATA_CDA_ACCESS_TOKEN,
    },
  })).toString('base64')
}

export { getContentfulConnector }
