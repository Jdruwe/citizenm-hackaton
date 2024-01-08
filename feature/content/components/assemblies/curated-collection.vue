<script setup lang="ts">
import type { TypeCuratedCollection } from '~/types/contentful/marketing'
import { CollectionService } from '~/feature/collection/services/collection-service'

interface Props {
  data: TypeCuratedCollection<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

const { data: items } = await useAsyncData('collectionItems', () => {
  const collectionService = new CollectionService()
  return collectionService.mapItems(data.fields.items)
})

function isSlider() {
  return data.fields.displayAs === 'slider'
}
</script>

<template>
  <template v-if="isSlider">
    <Slider :items="items" />
  </template>
</template>
