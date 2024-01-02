<script setup>
const { $contentfulClient } = useNuxtApp()
const { data: page } = await useAsyncData(
  'page',
  () => $contentfulClient.getEntry({
    entry_id: '7sa8Fsr5DI8xiuHDetnmv7',
  }),
)
</script>

<template>
  {{ page.fields.pageTitle }}
</template>
