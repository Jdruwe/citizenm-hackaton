import { HotelRepository } from '~/feature/hotel/repositories/hotel-repository'
import type { ContentfulHotel, Hotel } from '~/feature/hotel/types/hotel.types'

class HotelService {
  private readonly hotelRepository

  constructor() {
    this.hotelRepository = new HotelRepository()
  }

  public async getHotelBySlug(slug: string): Promise<ContentfulHotel | null> {
    return await this.hotelRepository.getHotelBySlug(slug)
  }

  public async getHotelById(id: string): Promise<Hotel | null> {
    return await this.hotelRepository.getHotelById(id)
  }

  public async getHotels(): Promise<Hotel[]> {
    return await this.hotelRepository.getHotels()
  }
}

export { HotelService }
