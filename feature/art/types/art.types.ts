import type { Document } from '@contentful/rich-text-types'

export interface Art {
  name: string
  title: string
  image: string
  artist: {
    name: string
    description: Document
  }
}
