import process from 'node:process'
import { type CreateClientParams, createClient } from 'contentful'

if (process.env.CTF_SPACE_ID === undefined || process.env.CTF_CDA_ACCESS_TOKEN === undefined) {
  throw new Error('[plugin - contentful]: make sure to provide an environment variable for space and accessToken')
}

const config: CreateClientParams = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      client: createClient(config),
    },
  }
})
