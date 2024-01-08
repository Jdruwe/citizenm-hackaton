import type { Entry } from 'contentful'
import type { Item } from '~/feature/collection/types/item.types'
import type { Hotel } from '~/feature/hotel/types/hotel.types'
import { type TypeContentCardSkeleton, isTypeImage } from '~/types/contentful/marketing'
import type { Art } from '~/feature/art/types/art.types'

async function mapHotelToItem(hotel: Hotel): Promise<Item | null> {
  const { name, heroImage, shortDescription } = hotel
  if (name && heroImage && shortDescription) {
    return {
      image: heroImage,
      title: name,
      text: shortDescription,
    }
  }
  else {
    return null
  }
}

function mapContentCardToItem(item: Entry<TypeContentCardSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Item | null {
  const { media, description } = item.fields
  if (media) {
    if (isTypeImage(media)) {
      const asset = media.fields.asset
      if (asset) {
        const file = asset.fields.file
        if (file) {
          return {
            image: file.url,
            title: item.fields.title,
            ...(description && { text: description }),
            ...(description && { richText: true }),
          }
        }
      }
    }
  }
  return null
}

async function mapArtToItem(art: Art): Promise<Item | null> {
  if (art) {
    return {
      image: art.image,
      title: art.name,
      text: art.artist.description,
      richText: true,
    }
  }
  else {
    return null
  }
}

export { mapHotelToItem, mapContentCardToItem, mapArtToItem }
