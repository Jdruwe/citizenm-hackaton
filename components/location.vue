<script setup lang="ts">
interface Props {
  isRichTextEmbedded?: boolean
  data: {
    street: string
    postalCode: string
    city: string
    lon: number
    lat: number
  }
}

const { data, isRichTextEmbedded } = defineProps<Props>()
const { street, postalCode, city, lat, lon } = data

const link = `https://maps.google.com/?q=${lat},${lon}`
</script>

<template>
  <a v-if="isRichTextEmbedded" :href="link" target="_blank" class="inline-block cursor-pointer mb-4 bg-red-200 p-5 rounded-md">
    {{ street }} {{ postalCode }} {{ city }}
  </a>
</template>
