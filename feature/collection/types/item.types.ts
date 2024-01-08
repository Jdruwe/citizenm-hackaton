import type { Document } from '@contentful/rich-text-types'

// TODO: why is text optional?
export interface Item {
  id: string
  type: 'hotel' | 'art' | 'contentCard' | 'faq'
  image?: string
  title: string
  text?: string | Document
  richText?: boolean
}
