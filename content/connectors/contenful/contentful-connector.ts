import { type ContentfulClientApi, type CreateClientParams, createClient } from 'contentful'

abstract class ContentfulConnector {
  private readonly contentfulClient: ContentfulClientApi<undefined>

  constructor() {
    const clientParams = this.getClientParams()
    this.contentfulClient = createClient(clientParams)
  }

  private getClientParams(): CreateClientParams {
    // Normally we would assert that the environment variables are set, but since this is a demo, we'll just assume they are.
    return {
      space: process.env.CTF_MARKETING_SPACE_ID!,
      accessToken: process.env.CTF_MARKETING_CDA_ACCESS_TOKEN!,
      environment: process.env.CTF_ENVIRONMENT,
      headers: {
        'x-contentful-resource-resolution': this.getCrossSpaceResolutionHeader(),
      },
    }
  }

  private getCrossSpaceResolutionHeader(): string {
    const crossSpaceTokens = {
      spaces: {
        [process.env.CTF_MARKETING_SPACE_ID!]: process.env.CTF_MARKETING_CDA_ACCESS_TOKEN,
        [process.env.CTF_MASTER_DATA_SPACE_ID!]: process.env.CTF_MASTER_DATA_CDA_ACCESS_TOKEN,
      },
    }
    return Buffer
      .from(JSON.stringify(crossSpaceTokens))
      .toString('base64')
  }

  // TODO: add typings
  public async getEntries(query: object) {
    return this.contentfulClient.getEntries(query)
  }
}

export { ContentfulConnector }
