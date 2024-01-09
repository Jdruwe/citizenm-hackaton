import type { Entry } from 'contentful'
import type { FaqItem } from '~/feature/faq/types/faq.types'
import { getContentfulConnector } from '~/feature/content/connectors/contenful/contentful-connector'
import type { TypeFaqSkeleton } from '~/types/contentful/masterdata'
import { mapToFaqItem } from '~/feature/faq/mappers/faq-mapper'

class FaqRepository {
  public async getFaqById(id: string): Promise<FaqItem | null> {
    const hotelFromMasterData = await this.getFaqFromMasterDataById(id)
    return mapToFaqItem(hotelFromMasterData)
  }

  private async getFaqFromMasterDataById(id: string): Promise<Entry<TypeFaqSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>> {
    return await getContentfulConnector('masterdata')
      .getEntry<TypeFaqSkeleton>(id, { include: 1 })
  }
}

export { FaqRepository }
