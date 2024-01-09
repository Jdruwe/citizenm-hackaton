import type { Entry } from 'contentful'
import type { TypeExperienceSkeleton } from '~/types/contentful/masterdata'
import type { Experience } from '~/feature/experience/types/experience.types'
import { mapToLocation } from '~/feature/location/mappers/location-mapper'

function mapToExperience(entry: Entry<TypeExperienceSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Experience | null {
  const { title, content, image, location, activities } = entry.fields

  const imageUrl = image?.fields.asset?.fields.file?.url
  const mappedLocation = location && mapToLocation(location)

  if (imageUrl && mappedLocation) {
    return {
      title,
      image: imageUrl,
      location: mappedLocation,
      activities,
      content,
    }
  }
  return null
}

export { mapToExperience }
