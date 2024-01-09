<script setup lang="ts">
import ContentCanvas from '~/feature/content/components/page/content-canvas.vue'
</script>

<template>
  <ContentCanvas :slug="$route.params.slug" />
</template>
