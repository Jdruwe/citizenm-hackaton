import { ArtRepository } from '~/feature/art/repositories/art-repository'
import type { Art } from '~/feature/art/types/art.types'

class ArtService {
  private readonly artRepository

  constructor() {
    this.artRepository = new ArtRepository()
  }

  public async getArtById(id: string): Promise<Art | null> {
    return await this.artRepository.getArtById(id)
  }
}

export { ArtService }
