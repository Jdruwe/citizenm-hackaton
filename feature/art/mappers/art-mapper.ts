import type { Entry } from 'contentful'
import type { TypeArtSkeleton } from '~/types/contentful/masterdata'
import type { Art } from '~/feature/art/types/art.types'

function mapToArt(entry: Entry<TypeArtSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): Art | null {
  const imageUrl = entry.fields.image?.fields.asset?.fields.file?.url
  const artist = entry.fields.artist
  if (imageUrl && artist) {
    return {
      name: entry.fields.name,
      title: entry.fields.title,
      image: imageUrl,
      artist: {
        name: artist.fields.artistName,
        description: artist.fields.artistDescription,
      },
    }
  }
  return null
}

export { mapToArt }
