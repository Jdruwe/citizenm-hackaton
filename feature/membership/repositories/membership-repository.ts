import type { Entry } from 'contentful'
import type { TypeMembershipSkeleton } from '~/types/contentful/masterdata'
import { getEntry } from '~/feature/content/connectors/contenful/contentful-connector'
import type { Membership } from '~/feature/membership/types/membership.types'
import { mapToMembership } from '~/feature/membership/mappers/membership-mapper'

class MembershipRepository {
  public async getMembershipById(id: string): Promise<Membership | null> {
    const membershipFromMasterData = await this.getMembershipFromMasterDataById(id)
    return mapToMembership(membershipFromMasterData)
  }

  /**
   * It might be possible that we need to increase the include value during the hackathon.
   */
  private async getMembershipFromMasterDataById(id: string): Promise<Entry<TypeMembershipSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getEntry<TypeMembershipSkeleton>('masterdata', id, { include: 2 })
  }
}

export { MembershipRepository }
