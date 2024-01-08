import type { Entry } from 'contentful'
import type { Item } from '~/feature/collection/types/item.types'
import type { Hotel } from '~/feature/hotel/types/hotel.types'
import { type TypeContentCardSkeleton, isTypeImage } from '~/types/contentful/marketing'
import type { Art } from '~/feature/art/types/art.types'
import type { FaqItem } from '~/feature/faq/types/faq.types'

async function mapHotelToItem(hotel: Hotel): Promise<Item | null> {
  const { name, heroImage, shortDescription } = hotel
  if (name && heroImage && shortDescription) {
    return {
      id: generateId(),
      type: 'hotel',
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
      const assetUrl = media.fields.asset?.fields.file?.url
      if (assetUrl) {
        return {
          id: generateId(),
          type: 'contentCard',
          image: assetUrl,
          title: item.fields.title,
          ...(description && { text: description }),
          ...(description && { richText: true }),
        }
      }
    }
  }
  return null
}

async function mapArtToItem(art: Art): Promise<Item | null> {
  if (art) {
    return {
      id: generateId(),
      type: 'art',
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

async function mapFaqToItem(faq: FaqItem): Promise<Item | null> {
  if (faq) {
    return {
      id: generateId(),
      type: 'faq',
      title: faq.question,
      text: faq.answer,
      richText: true,
    }
  }
  else {
    return null
  }
}

function generateId(): string {
  return crypto.randomUUID()
}

export { mapHotelToItem, mapContentCardToItem, mapArtToItem, mapFaqToItem }
