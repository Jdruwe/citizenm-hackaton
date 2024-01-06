import type { Document } from '@contentful/rich-text-types'

export interface Hotel {
  name: string
  shortDescription: string
  heroImage: string
  mainImage?: string
  location: {
    lat: number
    lon: number
    city: string
    country: string
    continent: string
  }
  faqs?: Faq[]
}

export interface Faq {
  question: string
  answer: Document
}
