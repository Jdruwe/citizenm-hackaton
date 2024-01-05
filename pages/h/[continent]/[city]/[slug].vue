<script setup lang="ts">
import HotelDetailPage from '~/components/hotel-detail-page.vue'
</script>

<template>
  <HotelDetailPage :slug="$route.params.slug" />
</template>
