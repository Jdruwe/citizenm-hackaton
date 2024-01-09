import type { Entry } from 'contentful'
import type { TypeExperienceSkeleton } from '~/types/contentful/masterdata'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import type { Experience } from '~/feature/experience/types/experience.types'
import { mapToExperience } from '~/feature/experience/mappers/experience-mapper'

class ExperienceRepository {
  public async getExperienceById(id: string): Promise<Experience | null> {
    const experienceFromMasterData = await this.getExperienceFromMasterDataById(id)
    return mapToExperience(experienceFromMasterData)
  }

  private async getExperienceFromMasterDataById(id: string): Promise<Entry<TypeExperienceSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getContentfulConnector('masterdata')
      .getEntry<TypeExperienceSkeleton>(id, { include: 4 })
  }
}

export { ExperienceRepository }
