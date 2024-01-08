import type { Entry, EntrySkeletonType, ResolvedField } from 'contentful'
import {
  type TypeArtSkeleton,
  type TypeContentCardSkeleton,
  type TypeCuratedCollectionSkeleton,
  type TypeHotelSkeleton,
  isTypeArt,
  isTypeContentCard,
  isTypeHotel,
} from '~/types/contentful/marketing'
import { HotelService } from '~/feature/hotel/services/hotel-service'
import type { Item } from '~/feature/collection/types/item.types'
import { ArtService } from '~/feature/art/services/art-service'
import { mapArtToItem, mapContentCardToItem, mapHotelToItem } from '~/feature/collection/mapper/item-mapper'

class CollectionService {
  private readonly hotelService
  private readonly artService

  constructor() {
    this.hotelService = new HotelService()
    this.artService = new ArtService()
  }

  public async mapItems(items: ResolvedField<TypeCuratedCollectionSkeleton['fields']['items'], 'WITHOUT_UNRESOLVABLE_LINKS', string>) {
    const mappedItems: Item[] = []
    for (const item of items) {
      if (item) {
        if (isTypeHotel(item as Entry<EntrySkeletonType, 'WITHOUT_UNRESOLVABLE_LINKS', string>)) {
          const id = (item as Entry<TypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>).fields.hotelMasterdata?.sys.id
          if (id) {
            const hotel = await this.hotelService.getHotelById(id)
            const mappedItem = hotel && await mapHotelToItem(hotel)
            mappedItem && mappedItems.push(mappedItem)
          }
        }
        if (isTypeContentCard(item as Entry<EntrySkeletonType, 'WITHOUT_UNRESOLVABLE_LINKS', string>)) {
          const mappedItem = mapContentCardToItem(item as Entry<TypeContentCardSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>)
          mappedItem && mappedItems.push(mappedItem)
        }
        if (isTypeArt(item as Entry<EntrySkeletonType, 'WITHOUT_UNRESOLVABLE_LINKS', string>)) {
          const id = (item as Entry<TypeArtSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>).fields.artMasterdata?.sys.id
          if (id) {
            const art = await this.artService.getArtById(id)
            const mappedItem = art && await mapArtToItem(art)
            mappedItem && mappedItems.push(mappedItem)
          }
        }
      }
    }
    return mappedItems
  }
}

export { CollectionService }
