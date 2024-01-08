import type { Entry } from 'contentful'
import type { TypeHotelSkeleton as MasterTypeHotelSkeleton, TypeFaqSkeleton } from '~/types/contentful/masterdata'
import type { Hotel } from '~/feature/hotel/types/hotel.types'
import { mapToMasterDataLocation } from '~/feature/location/mapper/location-mapper'

function mapToHotel(entry: Entry<MasterTypeHotelSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Hotel | null {
  const { location, heroImage, mainImage, faqs } = entry.fields
  const heroImageUrl = heroImage?.fields.asset?.fields.file?.url
  const mappedLocation = location && mapToMasterDataLocation(location)

  // TODO: resolve typing issue, not sure why FAQs is complaining
  if (heroImageUrl && mappedLocation) {
    return {
      name: entry.fields.name,
      shortDescription: entry.fields.shortDescription,
      heroImage: heroImageUrl,
      mainImage: mainImage?.fields.asset?.fields.file?.url,
      location: mappedLocation,
      ...(faqs && {
        faqs: faqs
          .filter((item): item is Entry<TypeFaqSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string> => item !== undefined)
          .map(faq => ({
            question: faq.fields.question,
            answer: faq.fields.answer,
          })),
      }),
    }
  }
  return null
}

export { mapToHotel }
