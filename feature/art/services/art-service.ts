import { ArtRepository } from '~/feature/art/repositories/art-repository'
import type { Art } from '~/feature/art/types/art.types'

class ArtService {
  private readonly artRepository

  constructor() {
    this.artRepository = new ArtRepository()
  }

  public async getArtByCrn(crn: string): Promise<Art | null> {
    return await this.artRepository.getArtByCrn(crn)
  }
}

export { ArtService }
