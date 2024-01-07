import type { Document } from '@contentful/rich-text-types'

export interface Hotel {
  name: string
  shortDescription: string
  heroImage: string
  mainImage?: string
  location: Location
  faqs?: Faq[]
}

export interface Faq {
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
