import type { Entry, ResourceLink } from 'contentful'
import {
  type TypeHotelSkeleton as MarketingTypeHotelSkeleton,
  type TypePageSkeleton,
  isTypeHotel,
} from '~/types/contentful/marketing'
import type { TypeHotelSkeleton as MasterTypeHotelSkeleton } from '~/types/contentful/masterdata'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import type { Hotel } from '~/feature/hotel/types/hotel.types'

class HotelRepository {
  /**
   * @return Promise of hotel or null if nothing was found
   * @param slug
   */
  public async getHotel(slug: string) {
    const query = {
      'content_type': 'page',
      'fields.pageType.sys.contentType.sys.id': 'hotel',
      'select': 'fields.pageType',
      'fields.slug': slug,
      'include': 1,
      'limit': 1,
    }

    const data = await getContentfulConnector('marketing')
      .getEntries<TypePageSkeleton>(query)

    if (data && data.items.length > 0) {
      const pageType = data.items[0].fields.pageType as Entry<MarketingTypeHotelSkeleton>
      const hotelResource = await this.getHotelResourceName(pageType)
      if (hotelResource) {
        return this.mapToHotel(hotelResource)
      }
    }
    return null
  }

  private async getHotelResourceName(pageType: Entry<MarketingTypeHotelSkeleton>) {
    if (isTypeHotel(pageType)) {
      const resourceLink = pageType.fields.hotelMasterdata?.sys as ResourceLink
      if (resourceLink) {
        return await this.getHotelFromMasterSpace(resourceLink.urn)
      }
    }
    return null
  }

  private async getHotelFromMasterSpace(resourceName: string) {
    const regex = /\/entries\/([^\/]+)/
    const match = resourceName.match(regex)

    if (match) {
      const entryId = match[1] // "7GrJJ8g9v9Mq7xtL9wIs1f"
      return await getContentfulConnector('masterdata')
        .getEntry<MasterTypeHotelSkeleton>(entryId)
    }
    return null
  }

  private mapToHotel(entry: Entry<MasterTypeHotelSkeleton>): Hotel {
    return {
      name: entry.fields.name as string,
      shortDescription: entry.fields.shortDescription as string,
      // @ts-expect-error
      ...(entry.fields.mainImage && { mainImage: entry.fields.mainImage.fields.asset.fields.file.url }),
    }
  }
}

export { HotelRepository }
