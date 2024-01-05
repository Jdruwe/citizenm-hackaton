<script setup lang="ts">
import PageContent from '~/feature/content/components/page/page-content.vue'
</script>

<template>
  <PageContent :slug="$route.params.slug" />
</template>
