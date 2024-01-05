import type { Entry, EntrySkeletonType, ResolvedField, ResourceLink } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
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

class CollectionService {
  private readonly hotelService
  private readonly artService

  constructor() {
    this.hotelService = new HotelService()
    this.artService = new ArtService()
  }

  public async mapItems(items: ResolvedField<TypeCuratedCollectionSkeleton['fields']['items'], undefined, string>) {
    const mappedItems: Item[] = []
    for (const item of items) {
      if (item) {
        if (isTypeHotel(item as Entry<EntrySkeletonType, undefined, string>)) {
          const mappedItem = await this.mapHotelToItem(item as Entry<TypeHotelSkeleton, undefined, string>)
          mappedItem && mappedItems.push(mappedItem)
        }
        if (isTypeContentCard(item as Entry<EntrySkeletonType, undefined, string>)) {
          const mappedItem = await this.mapContentCardToItem(item as Entry<TypeContentCardSkeleton, undefined, string>)
          mappedItem && mappedItems.push(mappedItem)
        }
        if (isTypeArt(item as Entry<EntrySkeletonType, undefined, string>)) {
          const mappedItem = await this.mapArtToItem(item as Entry<TypeArtSkeleton, undefined, string>)
          mappedItem && mappedItems.push(mappedItem)
        }
      }
    }
    return mappedItems
  }

  private mapContentCardToItem(item: Entry<TypeContentCardSkeleton, undefined, string>): Item {
    // @ts-expect-error we cannot use 'WITHOUT_UNRESOLVABLE_LINKS' as otherwise links to other spaces are not shown
    const imageUrl = item.fields.media?.fields.asset?.fields.file?.url as string

    let text
    if (item.fields.description) {
      text = documentToHtmlString(item.fields.description)
    }

    return {
      image: imageUrl,
      title: item.fields.title,
      ...(text && { text }),
      ...(text && { htmlText: true }),
    }
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

  private async mapArtToItem(item: Entry<TypeArtSkeleton, undefined, string>): Promise<Item | null> {
    const art = await this.artService.getArtByCrn((item.fields.artMasterdata?.sys as ResourceLink).urn)
    if (art) {
      return {
        image: art.image,
        title: art.name,
        text: art.artistDescription,
        htmlText: true,
      }
    }
    else {
      return null
    }
  }
}

export { CollectionService }
