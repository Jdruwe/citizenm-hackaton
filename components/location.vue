<script setup lang="ts">
import type { Location } from '~/feature/hotel/types/hotel.types'

interface Props {
  isRichTextEmbedded?: boolean
  data: Location
}

const { data, isRichTextEmbedded } = defineProps<Props>()
const { street, postalCode, city, lat, lon } = data

const link = `https://maps.google.com/?q=${lat},${lon}`
const embedLink = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`
</script>

<template>
  <a
    v-if="isRichTextEmbedded" :href="link" target="_blank"
    class="inline-block cursor-pointer mb-4 bg-red-200 p-5 rounded-md"
  >
    {{ street }} {{ postalCode }} {{ city }}
  </a>
  <div v-else class="relative w-full h-96">
    <iframe
      class="absolute top-0 left-0 w-full h-full"
      :src="embedLink"
      style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
    />
  </div>
</template>
