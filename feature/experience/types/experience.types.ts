import type { Document } from '@contentful/rich-text-types'
import type { Location } from '~/feature/location/types/location.types'

export interface Experience {
  title: string
  image: string
  location: Location
  activities: string[]
  content?: Document
}
