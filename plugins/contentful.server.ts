import { createClient } from 'contentful'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const client = createClient({
    space: runtimeConfig.CTF_SPACE_ID,
    accessToken: runtimeConfig.CTF_CDA_ACCESS_TOKEN,
  })

  return {
    provide: {
      contentfulClient: client,
    },
  }
})
