<script setup lang="ts">
import type { Location } from '~/feature/hotel/types/hotel.types'

interface Props {
  isRichTextEmbedded?: boolean
  data: Location
}

const { data, isRichTextEmbedded } = defineProps<Props>()
const { street, postalCode, city, lat, lon } = data

const link = `https://maps.google.com/?q=${lat},${lon}`
</script>

<template>
  <a
    v-if="isRichTextEmbedded" :href="link" target="_blank"
    class="inline-block cursor-pointer mb-4 bg-red-200 p-5 rounded-md"
  >
    {{ street }} {{ postalCode }} {{ city }}
  </a>
  <div v-else>
    Non embedded location version!
  </div>
</template>
