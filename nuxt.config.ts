export default defineNuxtConfig({
  runtimeConfig: {
    CTF_MARKETING_SPACE_ID: process.env.CTF_MARKETING_SPACE_ID,
    CTF_MARKETING_CDA_ACCESS_TOKEN: process.env.CTF_MARKETING_CDA_ACCESS_TOKEN,
    CTF_MASTER_DATA_SPACE_ID: process.env.CTF_MASTER_DATA_SPACE_ID,
    CTF_MASTER_DATA_CDA_ACCESS_TOKEN: process.env.CTF_MASTER_DATA_CDA_ACCESS_TOKEN,
    CTF_CMA_ACCESS_TOKEN: process.env.CTF_CMA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT,
  },
  image: {
    contentful: {},
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
})
