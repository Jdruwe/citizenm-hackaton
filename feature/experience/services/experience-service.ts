import { ExperienceRepository } from '~/feature/experience/repositories/experience-repository'
import type { Experience } from '~/feature/experience/types/experience.types'

class ExperienceService {
  private readonly experienceRepository

  constructor() {
    this.experienceRepository = new ExperienceRepository()
  }

  public async getExperienceById(id: string): Promise<Experience | null> {
    return await this.experienceRepository.getExperienceById(id)
  }
}

export { ExperienceService }
