import type { Entry } from 'contentful'
import type { TypeAmenitySkeleton } from '~/types/contentful/masterdata'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import { mapToAmenity } from '~/feature/amenity/mappers/amenity-mapper'
import type { Amenity } from '~/feature/amenity/types/amenity.types'

class AmenityRepository {
  public async getAmenityById(id: string): Promise<Amenity | null> {
    const amenityFromMasterData = await this.getAmenityFromMasterDataById(id)
    return mapToAmenity(amenityFromMasterData)
  }

  /**
   * It might be possible that we need to increase the include value during the hackathon.
   */
  private async getAmenityFromMasterDataById(id: string): Promise<Entry<TypeAmenitySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getContentfulConnector('masterdata')
      .getEntry<TypeAmenitySkeleton>(id, { include: 1 })
  }
}

export { AmenityRepository }
