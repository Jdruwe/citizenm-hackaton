import type { Entry } from 'contentful'
import type { TypeAmenitySkeleton } from '~/types/contentful/masterdata'
import type { Amenity } from '~/feature/amenity/types/amenity.types'

function mapToAmenity(entry: Entry<TypeAmenitySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Amenity | null {
  const { title, icon } = entry.fields
  const iconUrl = icon?.fields.asset?.fields.file?.url
  return iconUrl ? { title, icon: iconUrl } : null
}

export { mapToAmenity }
