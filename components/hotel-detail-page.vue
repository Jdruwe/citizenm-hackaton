<script setup lang="ts">
import { HotelService } from '~/feature/hotel/services/hotel-service'
import Faq from '~/components/faq.vue'

interface Props {
  slug: string
}

const { slug } = defineProps<Props>()

const { data, error } = await useAsyncData('hotel', () => {
  const hotelService = new HotelService()
  return hotelService.getHotelBySlug(slug)
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Er is iets misgelopen, probeer later opnieuw.',
  })
}

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Deze pagina bestaat niet (meer).',
  })
}
</script>

<template>
  <Section v-if="data">
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
    <div class="mb-10">
      <h2 class="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Where can you find us?
      </h2>
      <Location v-if="data.location" :is-rich-text-embedded="false" :data="data.location" />
    </div>
    <div class="mb-4">
      <Faq v-if="data.faqs" :faqs="data.faqs" />
    </div>
  </Section>
</template>
