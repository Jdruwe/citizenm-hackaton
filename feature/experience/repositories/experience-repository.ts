import type { Entry } from 'contentful'
import type { TypeExperienceSkeleton } from '~/types/contentful/masterdata'
import type { Experience } from '~/feature/experience/types/experience.types'
import { mapToExperience } from '~/feature/experience/mappers/experience-mapper'
import { getEntry } from '~/feature/content/connectors/contenful/contentful-connector'

class ExperienceRepository {
  public async getExperienceById(id: string): Promise<Experience | null> {
    const experienceFromMasterData = await this.getExperienceFromMasterDataById(id)
    return mapToExperience(experienceFromMasterData)
  }

  private async getExperienceFromMasterDataById(id: string): Promise<Entry<TypeExperienceSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getEntry<TypeExperienceSkeleton>('masterdata', id, { include: 4 })
  }
}

export { ExperienceRepository }
