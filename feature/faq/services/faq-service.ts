import { FaqRepository } from '~/feature/faq/repositories/faq-repository'
import type { FaqItem } from '~/feature/faq/types/faq.types'

class FaqService {
  private readonly faqRepository

  constructor() {
    this.faqRepository = new FaqRepository()
  }

  public async getFaqById(id: string): Promise<FaqItem | null> {
    return await this.faqRepository.getFaqById(id)
  }
}

export { FaqService }
