import { HotelRepository } from '~/feature/hotel/repositories/hotel-repository'
import type { Hotel } from '~/feature/hotel/types/hotel.types'

class HotelService {
  private readonly contentfulHotelConnector

  constructor() {
    this.contentfulHotelConnector = new HotelRepository()
  }

  public async getHotel(slug: string[]): Promise<Hotel | null> {
    const finalSlug = slug.at(-1)

    if (finalSlug) {
      return await this.contentfulHotelConnector.getHotel(finalSlug)
    }
    return null
  }
}

export { HotelService }
