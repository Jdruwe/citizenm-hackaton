import type { Document } from '@contentful/rich-text-types'
import type { Feature } from '~/feature/feature/types/feature.types'

export interface Membership {
  commercialTitle: string
  commercialText: Document
  features: Feature[]
}
