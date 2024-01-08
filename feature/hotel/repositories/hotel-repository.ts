import type { EntitySys, Entry } from 'contentful'
import {
  type TypeHotelSkeleton as MarketingTypeHotelSkeleton,
  type TypePageSkeleton,
  isTypeHotel,
} from '../../../types/contentful/marketing'
import type {
  TypeHotelSkeleton as MasterTypeHotelSkeleton,
} from '../../../types/contentful/masterdata'
import { getContentfulConnector } from '../../content/connectors/contenful/contentful-connector'
import type { ContentfulHotel, Hotel } from '../types/hotel.types'
import { mapToHotel } from '~/feature/hotel/mapper/hotel-mapper'

class HotelRepository {
  public async getHotelById(id: string): Promise<Hotel | null> {
    const hotelFromMasterData = await this.getHotelFromMasterDataById(id)
    return mapToHotel(hotelFromMasterData)
  }

  /**
   * @return Promise of hotel or null if nothing was found
   * @param slug
   */
  public async getHotelBySlug(slug: string): Promise<ContentfulHotel | null> {
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
      const pageType = data.items[0].fields.pageType as Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
      if (pageType) {
        const masterDataHotel = await this.getHotelFromMasterData(pageType)
        if (masterDataHotel) {
          return this.mapToContentfulHotel(pageType, masterDataHotel)
        }
      }
    }
    return null
  }

  public async getHotels(): Promise<Hotel[]> {
    const hotels: Hotel[] = []
    // TODO: fix below!
    // const hotelEntryCollection = await getContentfulConnector('masterdata')
    //   .getEntries<MasterTypeHotelSkeleton>({
    //     content_type: 'hotel',
    //     include: 4,
    //   })

    // for (const entry of hotelEntryCollection.items) {
    //   hotels.push(this.mapToHotel(entry))
    // }
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
    return await getContentfulConnector('masterdata')
      .getEntry<MasterTypeHotelSkeleton>(id, { include: 4 })
  }

  private mapToContentfulHotel(
    marketingData: Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>,
    masterData: Entry<MasterTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>,
  ): ContentfulHotel {
    return {
      marketing: marketingData,
      master: mapToHotel(masterData),
    }
  }
}

export { HotelRepository }
