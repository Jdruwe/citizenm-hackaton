import { HotelRepository } from '~/feature/hotel/repositories/hotel-repository'
import type { Hotel } from '~/feature/hotel/types/hotel.types'

class HotelService {
  private readonly hotelRepository

  constructor() {
    this.hotelRepository = new HotelRepository()
  }

  public async getHotelBySlug(slug: string): Promise<Hotel | null> {
    return await this.hotelRepository.getHotelBySlug(slug)
  }

  public async getHotelByCrn(crn: string): Promise<Hotel | null> {
    return await this.hotelRepository.getHotelByCrn(crn)
  }

  // TODO: getHotels
}

export { HotelService }
