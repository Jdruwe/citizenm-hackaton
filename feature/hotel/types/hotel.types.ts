import type { Entry } from 'contentful'
import type { TypeHotelSkeleton as MarketingTypeHotelSkeleton } from '~/types/contentful/marketing'
import type { FaqItem } from '~/feature/faq/types/faq.types'
import type { Location } from '~/feature/location/types/location.types'

export interface ContentfulHotel {
  marketing: Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  master: Hotel
}

export interface Hotel {
  title: string
  shortDescription: string
  heroImage: string
  location: Location
  mainImage?: string
  faqs?: FaqItem[]
}
