<script setup lang="ts">
import type { TypeCuratedCollection } from '~/types/contentful/marketing'
import { CollectionService } from '~/feature/collection/services/collection-service'

interface Props {
  data: TypeCuratedCollection<undefined, string>
}

const { data } = defineProps<Props>()

const { data: items } = await useAsyncData('collectionItems', () => {
  const collectionService = new CollectionService()
  return collectionService.mapItems(data.fields.items)
})

function isSlider() {
  return data.fields.displayAs === 'slider'
}

function isGrid() {
  return data.fields.displayAs === 'list'
}

function isList() {
  return data.fields.displayAs === 'grid'
}
</script>

<template>
  <template v-if="isSlider">
    <Slider :items="items" />
  </template>
</template>
