import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import type { TypeHotelSkeleton as MarketingTypeHotelSkeleton } from '~/types/contentful/marketing'

export interface ContentfulHotel {
  marketing: Entry<MarketingTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  master: Hotel
}

export interface Hotel {
  name: string
  shortDescription: string
  heroImage: string
  location: Location
  mainImage?: string
  faqs?: FaqItem[]
}

export interface FaqItem {
  question: string
  answer: Document
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
