import type { Document } from '@contentful/rich-text-types'

export interface Item {
  id: string
  type: 'hotel' | 'art' | 'contentCard'
  image: string
  title: string
  text?: string | Document
  richText?: boolean
}
