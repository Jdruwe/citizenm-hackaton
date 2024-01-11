import type { Entry } from 'contentful'
import type { TypeMembershipSkeleton } from '~/types/contentful/masterdata'
import type { Membership } from '~/feature/membership/types/membership.types'
import type { Feature } from '~/feature/feature/types/feature.types'
import { mapToFeature } from '~/feature/feature/mapper/feature-mapper'

function mapToMembership(entry: Entry<TypeMembershipSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Membership | null {
  const { commercialTitle, commercialText, features } = entry.fields

  const mappedFeatures: Feature[] = []
  if (features) {
    for (const feature of features) {
      if (feature) {
        const mappedFeature = mapToFeature(feature)
        mappedFeature && mappedFeatures.push(mappedFeature)
      }
    }
  }

  if (commercialTitle && commercialText) {
    return {
      commercialTitle,
      commercialText,
      features: mappedFeatures,
    }
  }
  return null
}

export { mapToMembership }
