import type { Document } from '@contentful/rich-text-types'

export interface FaqItem {
  question: string
  answer: Document
}
