import type { Entry, ResourceLink } from 'contentful'
import {
  type TypeHotelSkeleton as MarketingTypeHotelSkeleton,
  type TypePageSkeleton,
  isTypeHotel,
} from '../../../types/contentful/marketing'
import type { TypeHotelSkeleton as MasterTypeHotelSkeleton } from '../../../types/contentful/masterdata'
import { getContentfulConnector } from '../../content/connectors/contenful/contentful-connector'
import type { Hotel } from '../types/hotel.types'

class HotelRepository {
  public async getHotelByCrn(crn: string): Promise<Hotel | null> {
    const regex = /\/entries\/([^\/]+)/
    const match = crn.match(regex)

    if (match) {
      // TODO: check include level
      const resource = await getContentfulConnector('masterdata')
        .getEntry<MasterTypeHotelSkeleton>(match[1], { include: 4 })
      if (resource) {
        return this.mapToHotel(resource)
      }
    }
    return null
  }

  /**
   * @return Promise of hotel or null if nothing was found
   * @param slug
   */
  public async getHotelBySlug(slug: string): Promise<Hotel | null> {
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
      return await this.getHotelResource(pageType)
    }
    return null
  }

  public async getHotels(): Promise<Hotel[]> {
    const hotels: Hotel[] = []
    // TODO: implement
    return hotels
  }

  private async getHotelResource(pageType: Entry<MarketingTypeHotelSkeleton>) {
    if (isTypeHotel(pageType)) {
      const resourceLink = pageType.fields.hotelMasterdata?.sys as ResourceLink
      if (resourceLink) {
        return await this.getHotelByCrn(resourceLink.urn)
      }
    }
    return null
  }

  private mapToHotel(entry: Entry<MasterTypeHotelSkeleton>): Hotel {
    // @ts-expect-error we cannot use 'WITHOUT_UNRESOLVABLE_LINKS' as otherwise links to other spaces are not shown
    const heroImageUrl = entry.fields.heroImage?.fields.asset?.fields.file?.url
    // @ts-expect-error we cannot use 'WITHOUT_UNRESOLVABLE_LINKS' as otherwise links to other spaces are not shown
    const mainImageUrl = entry.fields.mainImage?.fields.asset?.fields.file?.url
    return {
      name: entry.fields.name as string,
      shortDescription: entry.fields.shortDescription as string,
      heroImage: heroImageUrl,
      ...(mainImageUrl && { mainImage: mainImageUrl }),
    }
  }
}

export { HotelRepository }
