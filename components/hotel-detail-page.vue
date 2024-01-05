<script setup lang="ts">
import { HotelService } from '~/feature/hotel/services/hotel-service'

interface Props {
  slug: string
}

const { slug } = defineProps<Props>()

const { data: hotel } = await useAsyncData('hotel', () => {
  const hotelService = new HotelService()
  return hotelService.getHotel(slug)
})

if (!hotel.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          {{ hotel?.name }}
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          {{ hotel?.shortDescription }}
        </p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <NuxtImg provider="contentful" :src="hotel?.mainImage" alt="" width="600" height="600" />
      </div>
    </div>
  </section>
</template>
