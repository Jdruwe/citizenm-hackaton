<script setup lang="ts">
import HotelDetail from '~/feature/hotel/components/hotel-detail.vue'
</script>

<template>
  <HotelDetail :slug="$route.params.slug" />
</template>
