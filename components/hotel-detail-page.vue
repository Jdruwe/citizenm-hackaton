<script setup lang="ts">
import { HotelService } from '~/feature/hotel/services/hotel-service'

interface Props {
  slug: string
}

const { slug } = defineProps<Props>()

const { data } = await useAsyncData('hotel', () => {
  const hotelService = new HotelService()
  return hotelService.getHotel(slug)
})

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Deze pagina bestaat niet (meer).',
  })
}
</script>

<template>
  <section v-if="data" class="bg-white dark:bg-gray-900">
    <div class="grid mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          {{ data?.name }}
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ data?.shortDescription }}
        </p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <NuxtImg provider="contentful" :src="data?.mainImage" alt="" width="600" height="600" />
      </div>
    </div>
  </section>
</template>
