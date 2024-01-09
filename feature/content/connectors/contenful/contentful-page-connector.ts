import type { Entry } from 'contentful'
import type { TypePageSkeleton } from '~/types/contentful/marketing'
import { getEntries } from '~/feature/content/connectors/contenful/contentful-connector'

class ContentfulPageConnector {
  /**
   * @return Promise of page entry or null if nothing was found
   * @param slug
   */
  public async getPageContent(slug: string): Promise<Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
    const query = {
      'content_type': 'page',
      'fields.pageType.sys.contentType.sys.id': 'contentCanvas',
      'select': 'fields.pageType',
      'fields.slug': slug,
      'include': 10,
      'limit': 1,
    }

    const data = await getEntries<TypePageSkeleton>('marketing', query)

    if (data && data.items.length > 0) {
      return data.items[0]
    }
    else {
      return null
    }
  }
}

export { ContentfulPageConnector }
