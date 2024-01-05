import type { Entry, ResolvedField, ResourceLink } from 'contentful'
import {
  type TypeCuratedCollectionSkeleton,
  type TypeHotelSkeleton,
  isTypeContentCard,
  isTypeHotel,
} from '~/types/contentful/marketing'
import { HotelService } from '~/feature/hotel/services/hotel-service'
import type { Item } from '~/feature/collection/types/item.types'

class CollectionService {
  private readonly hotelService

  constructor() {
    this.hotelService = new HotelService()
  }

  // TODO: rename this method
  public async mapItems(items: ResolvedField<TypeCuratedCollectionSkeleton['fields']['items'], undefined, string>) {
    console.log(JSON.stringify(items))
    return await Promise.all(
      items.map(async (item) => {
        if (item) {
          console.log('>>> item', item)
          // TODO: below could potentially be unresolved, how do we hande that?
          // @ts-expect-error
          if (isTypeContentCard(item)) {
            return item.fields.name
          }
          // TODO: below could potentially be unresolved, how do we hande that?
          // @ts-expect-error
          if (isTypeHotel(item)) {
            // @ts-expect-error
            return await this.mapHotelToItem(item)
          }
        }
      }).filter(item => !!item),
    )
  }

  private mapContentCardToItem(item: number) {

  }

  private async mapHotelToItem(item: Entry<TypeHotelSkeleton, undefined, string>): Promise<Item | null> {
    const hotel = await this.hotelService.getHotelByCrn((item.fields.hotelMasterdata?.sys as ResourceLink).urn)
    if (hotel) {
      return {
        image: hotel.heroImage,
        title: hotel.name,
        text: hotel.shortDescription,
      }
    }
    else {
      return null
    }
  }
}

export { CollectionService }
