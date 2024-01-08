import type { Entry } from 'contentful'
import type { TypeFaqSkeleton } from '~/types/contentful/masterdata'
import type { FaqItem } from '~/feature/faq/types/faq.types'

function mapToFaqItem(entry: Entry<TypeFaqSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>): FaqItem | null {
  const { question, answer } = entry.fields

  return {
    question,
    answer,
  }
  return null
}

export { mapToFaqItem }
