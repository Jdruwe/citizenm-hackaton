<script setup lang="ts">
import type { TypeSection } from '~/types/contentful/marketing'

interface Props {
  data: TypeSection<undefined, string>
}

const { data } = defineProps<Props>()
</script>

<template>
  I am a curated-collection!
  {{ data }}
</template>
