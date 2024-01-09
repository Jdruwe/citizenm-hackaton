import type { TypeContentCanvas, TypeSection } from '~/types/contentful/marketing'

interface ContentComponentProps<TData> {
  data: TData
}

type ContentComponentTypes =
  | TypeSection<'WITHOUT_UNRESOLVABLE_LINKS', string>
  | TypeContentCanvas<'WITHOUT_UNRESOLVABLE_LINKS', string>

export {
  type ContentComponentProps,
  type ContentComponentTypes,
}
