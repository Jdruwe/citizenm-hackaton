import type { Entry } from 'contentful'
import type { Item } from '~/feature/collection/types/item.types'
import type { Hotel } from '~/feature/hotel/types/hotel.types'
import { type TypeContentCardSkeleton, isTypeImage } from '~/types/contentful/marketing'
import type { Art } from '~/feature/art/types/art.types'
import type { FaqItem } from '~/feature/faq/types/faq.types'
import type { Experience } from '~/feature/experience/types/experience.types'

async function mapHotelToItem(hotel: Hotel): Promise<Item> {
  const { title, heroImage: image, shortDescription: text } = hotel
  return {
    id: generateId(),
    title,
    image,
    text,
    type: 'hotel',
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

async function mapArtToItem(art: Art): Promise<Item> {
  const { image, title, artist } = art
  return {
    id: generateId(),
    type: 'art',
    image,
    title,
    text: artist.description,
    richText: true,
  }
}

async function mapFaqToItem(faq: FaqItem): Promise<Item> {
  return {
    id: generateId(),
    type: 'faq',
    title: faq.question,
    text: faq.answer,
    richText: true,
  }
}

async function mapExperienceToItem(experience: Experience): Promise<Item> {
  return {
    id: generateId(),
    type: 'experience',
    title: experience.title,
    text: experience.content,
    image: experience.image,
    richText: true,
  }
}

function generateId(): string {
  return crypto.randomUUID()
}

export { mapHotelToItem, mapContentCardToItem, mapArtToItem, mapFaqToItem, mapExperienceToItem }
