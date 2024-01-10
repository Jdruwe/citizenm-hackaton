import { AmenityRepository } from '~/feature/amenity/repositories/amenity-repository'
import type { Amenity } from '~/feature/amenity/types/amenity.types'

class AmenityService {
  private readonly amenityRepository

  constructor() {
    this.amenityRepository = new AmenityRepository()
  }

  public async getAmenityById(id: string): Promise<Amenity | null> {
    return await this.amenityRepository.getAmenityById(id)
  }

  // TODO [HACKATHON]: visualize the data
}

export { AmenityService }
