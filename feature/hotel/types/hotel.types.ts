import type { Entry } from 'contentful'
import type { TypeHotelSkeleton as MarketingTypeHotelSkeleton } from '~/types/contentful/marketing'
import type { FaqItem } from '~/feature/faq/types/faq.types'

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

export interface Location {
  lat: number
  lon: number
  street: string
  postalCode: string
  city: string
  country: string
  continent: string
}
