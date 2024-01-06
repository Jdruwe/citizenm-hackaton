import type { Document } from '@contentful/rich-text-types'

export interface Item {
  image: string
  title: string
  text?: string | Document
  richText?: boolean
  link?: string
}
