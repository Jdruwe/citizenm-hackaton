import type { Entry } from 'contentful'
import type { TypePageSkeleton } from '~/types/contentful/marketing'
import type { FaqItem } from '~/feature/faq/types/faq.types'
import type { Location } from '~/feature/location/types/location.types'

export interface ContentfulHotel {
  page: Entry<TypePageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  data: Hotel
}

export interface Hotel {
  title: string
  shortDescription: string
  heroImage: string
  location: Location
  mainImage?: string
  faqs?: FaqItem[]
}
