import type { Entry } from 'contentful'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import type { Art } from '~/feature/art/types/art.types'
import type { TypeArtSkeleton } from '~/types/contentful/masterdata'

class ArtRepository {
  public async getArtByCrn(crn: string): Promise<Art | null> {
    const regex = /\/entries\/([^\/]+)/
    const match = crn.match(regex)

    if (match) {
      // TODO: check include level
      const resource = await getContentfulConnector('masterdata')
        .getEntry<TypeArtSkeleton>(match[1], { include: 4 })
      if (resource) {
        return this.mapToArt(resource)
      }
    }
    return null
  }

  private mapToArt(entry: Entry<TypeArtSkeleton>): Art {
    // @ts-expect-error we cannot use 'WITHOUT_UNRESOLVABLE_LINKS' as otherwise links to other spaces are not shown
    const imageUrl = entry.fields.image?.fields.asset?.fields.file?.url
    return {
      name: entry.fields.name as string,
      title: entry.fields.title as string,
      image: imageUrl,
      artist: entry.fields.artist?.fields.name,
      artistDescription: entry.fields.artist?.fields.artistDescription,
    }
  }
}

export { ArtRepository }
