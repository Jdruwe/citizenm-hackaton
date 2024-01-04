import { ContentfulConnector } from '~/content/connectors/contenful/contentful-connector'

class ContentfulPageConnector extends ContentfulConnector {
  public async getPageContent(slug: string) {
    const query = {
      'content_type': 'page',
      'fields.slug': slug,
      'include': 8,
    }
    return await this.getEntries(query)
  }
}

export { ContentfulPageConnector }
