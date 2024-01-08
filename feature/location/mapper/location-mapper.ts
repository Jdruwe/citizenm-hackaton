import type { Entry } from 'contentful'
import type { Location } from '~/feature/hotel/types/hotel.types'
import type { TypeLocationSkeleton } from '~/types/contentful/masterdata'

function mapToMasterDataLocation(location: Entry<TypeLocationSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Location | null {
  const city = location.fields.city
  if (city) {
    const country = city.fields.country
    if (country) {
      const continent = country.fields.continent
      if (continent) {
        return {
          lat: location.fields.coordinates.lat,
          lon: location.fields.coordinates.lon,
          city: city.fields.name,
          country: country.fields.name,
          continent: continent.fields.name,
          street: location.fields.street,
          postalCode: location.fields.postalCode,
        }
      }
    }
  }
  return null
}

export { mapToMasterDataLocation }
