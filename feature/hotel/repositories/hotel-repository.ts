import type { EntitySys, Entry } from 'contentful'
import {
  type TypeHotelSkeleton as MarketingTypeHotelSkeleton,
  type TypePageSkeleton,
  isTypeHotel,
} from '../../../types/contentful/marketing'
import type {
  TypeHotelSkeleton as MasterTypeHotelSkeleton,
} from '../../../types/contentful/masterdata'
import type { ContentfulHotel, Hotel } from '../types/hotel.types'
import { mapToHotel } from '~/feature/hotel/mappers/hotel-mapper'
import { getEntries, getEntry } from '~/feature/content/connectors/contenful/contentful-connector'

class HotelRepository {
  // TODO: what happens if I try to fetch an entry that doesn't exist?
  public async getHotelById(id: string): Promise<Hotel | null> {
    const hotelFromMasterData = await this.getHotelFromMasterDataById(id)
    return mapToHotel(hotelFromMasterData)
  }

  public async getHotelBySlug(slug: string): Promise<ContentfulHotel | null> {
    const query = {
      'content_type': 'page',
      'fields.pageType.sys.contentType.sys.id': 'hotel',
      'fields.slug': slug,
      'include': 1,
      'limit': 1,
    }

    const data = await getEntries<TypePageSkeleton>('marketing', query)

    if (data && data.items.length > 0) {
      const pageType = data.items[0].fields.pageType as Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
      if (pageType) {
        const masterDataHotel = await this.getHotelFromMasterData(pageType)
        if (masterDataHotel) {
          return this.mapToContentfulHotel(data.items[0], masterDataHotel)
        }
      }
      return null
    }
    return null
  }

  public async getHotels(): Promise<ContentfulHotel[]> {
    const hotels: ContentfulHotel[] = []

    const query = {
      'content_type': 'page',
      'fields.pageType.sys.contentType.sys.id': 'hotel',
      'include': 1,
    }

    const data = await getEntries<TypePageSkeleton>('marketing', query)

    if (data && data.items.length > 0) {
      for (const pageEntry of data.items) {
        const pageType = pageEntry.fields.pageType as Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
        if (pageType) {
          const masterDataHotel = await this.getHotelFromMasterData(pageType)
          if (masterDataHotel) {
            const contentfulHotel = this.mapToContentfulHotel(pageEntry, masterDataHotel)
            contentfulHotel && hotels.push(contentfulHotel)
          }
        }
      }
    }
    return hotels
  }

  private async getHotelFromMasterData(pageType: Entry<MarketingTypeHotelSkeleton>): Promise<Entry<MasterTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | null> {
    if (isTypeHotel(pageType)) {
      const masterDataId = (pageType.fields.hotelMasterdata?.sys as EntitySys).id
      if (masterDataId) {
        return await this.getHotelFromMasterDataById(masterDataId)
      }
    }
    return null
  }

  private async getHotelFromMasterDataById(id: string): Promise<Entry<MasterTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getEntry<MasterTypeHotelSkeleton>('masterdata', id, { include: 4 })
  }

  private mapToContentfulHotel(
    pageEntry: Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>,
    masterData: Entry<MasterTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>,
  ): ContentfulHotel | null {
    const mappedHotel = mapToHotel(masterData)
    if (mappedHotel) {
      return {
        page: pageEntry,
        data: mappedHotel,
      }
    }
    return null
  }
}

export { HotelRepository }
