import { getContentfulConnector } from '~/server/api/contentful/contentful-connector'

export default defineEventHandler(async (event) => {
  const body: {
    space: 'marketing' | 'masterdata'
    query: object
    id: string
  } = await readBody(event)

  const config = useRuntimeConfig(event)
  const data = await getContentfulConnector(body.space, config)
    .getEntry(body.id, body.query)
  return {
    ...data,
  }
})
