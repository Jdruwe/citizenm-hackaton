import { getContentfulConnector } from '~/server/api/contentful/contentful-connector'

export default defineEventHandler(async (event) => {
  const body: {
    space: 'marketing' | 'masterdata'
    query: object
  } = await readBody(event)

  const config = useRuntimeConfig(event)
  const data = await getContentfulConnector(body.space, config)
    .getEntries(body.query)
  return {
    ...data,
  }
})
