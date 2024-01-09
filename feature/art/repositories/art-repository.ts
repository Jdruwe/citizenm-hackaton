import type { Entry } from 'contentful'
import type { Art } from '~/feature/art/types/art.types'
import type { TypeArtSkeleton } from '~/types/contentful/masterdata'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import { mapToArt } from '~/feature/art/mappers/art-mapper'

class ArtRepository {
  public async getArtById(id: string): Promise<Art | null> {
    const artFromMasterData = await this.getArtFromMasterDataById(id)
    return mapToArt(artFromMasterData)
  }

  private async getArtFromMasterDataById(id: string): Promise<Entry<TypeArtSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getContentfulConnector('masterdata')
      .getEntry<TypeArtSkeleton>(id, { include: 1 })
  }
}

export { ArtRepository }
