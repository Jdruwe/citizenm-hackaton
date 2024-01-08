<script setup lang="ts">
import { HotelService } from '~/feature/hotel/services/hotel-service'
import Faq from '~/components/faq.vue'

interface Props {
  params: {
    continent: string
    country: string
    slug: string
  }
}

const { params } = defineProps<Props>()

const { data: hotel, error } = await useAsyncData('hotel', () => {
  const hotelService = new HotelService()
  return hotelService.getHotelBySlug(params.slug)
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Er is iets misgelopen, probeer later opnieuw.',
  })
}

if (!hotel.value || !isHotelMatchingUrl()) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Deze pagina bestaat niet (meer).',
  })
}

function isHotelMatchingUrl(): boolean {
  return (
    hotel.value?.location.continent.toLowerCase().replace(/\s+/g, '-') === params.continent
    && hotel.value?.location.country.toLowerCase().replace(/\s+/g, '-') === params.country
  )
}
</script>

<template>
  <Section v-if="hotel">
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
    <div class="mb-10">
      <h2 class="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Where can you find us?
      </h2>
      <Location v-if="hotel.location" :is-rich-text-embedded="false" :data="hotel.location" />
    </div>
    <div class="mx-auto w-full md:max-w-screen-md">
      <Faq v-if="hotel.faqs" :faqs="hotel.faqs" />
    </div>
  </Section>
</template>