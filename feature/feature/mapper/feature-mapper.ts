import type { Entry } from 'contentful'
import type { Feature } from '~/feature/feature/types/feature.types'
import type { TypeAmenitySkeleton } from '~/types/contentful/masterdata'

function mapToFeature(entry: Entry<TypeAmenitySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Feature | null {
  const { title, icon } = entry.fields
  const iconUrl = icon?.fields.asset?.fields.file?.url
  return iconUrl ? { title, icon: iconUrl } : null
}

export { mapToFeature }
