<script setup lang="ts">
interface Props {
  street: string
  postalCode: string
  city: string
  lon: number
  lat: number
}

const { street, postalCode, city, lat, lon } = defineProps<Props>()

const link = `https://maps.google.com/?q=${lat},${lon}`
</script>

<template>
  <a :href="link" target="_blank" class="inline-block cursor-pointer mb-4 bg-green-100 p-5 rounded-md">
    {{ street }} {{ postalCode }} {{ city }}
  </a>
</template>
