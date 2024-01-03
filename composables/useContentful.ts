// TODO: look if this is something we could use?
// TODO:

export async function usePage() {
  const { data } = await useAsyncData(
    'page',
    async () => {
      const { $contentfulClient } = useNuxtApp()
      return $contentfulClient.getEntry('7sa8Fsr5DI8xiuHDetnmv7')
    },
  )

  console.log('data', data)

  return data
}
