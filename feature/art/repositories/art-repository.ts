import type { Entry } from 'contentful'
import type { Art } from '~/feature/art/types/art.types'
import type { TypeArtSkeleton } from '~/types/contentful/masterdata'
import { mapToArt } from '~/feature/art/mappers/art-mapper'
import { getEntry } from '~/feature/content/connectors/contenful/contentful-connector'

class ArtRepository {
  public async getArtById(id: string): Promise<Art | null> {
    const artFromMasterData = await this.getArtFromMasterDataById(id)
    return mapToArt(artFromMasterData)
  }

  private async getArtFromMasterDataById(id: string): Promise<Entry<TypeArtSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getEntry<TypeArtSkeleton>('masterdata', id, { include: 1 })
  }
}

export { ArtRepository }
