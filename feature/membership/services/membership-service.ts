import { MembershipRepository } from '~/feature/membership/repositories/membership-repository'
import type { Membership } from '~/feature/membership/types/membership.types'

class MembershipService {
  private readonly membershipRepository: MembershipRepository

  constructor() {
    this.membershipRepository = new MembershipRepository()
  }

  public async getMembershipById(id: string): Promise<Membership | null> {
    return await this.membershipRepository.getMembershipById(id)
  }
}

export { MembershipService }
