<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import type { TypeCuratedCollection } from '~/types/contentful/marketing'
import { CollectionService } from '~/feature/collection/services/collection-service'
import type { Item } from '~/feature/collection/types/item.types'
import Accordion from '~/components/accordion.vue'

interface Props {
  data: TypeCuratedCollection<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

const { data: items } = await useAsyncData(`collectionItems-${data.sys.id}`, () => {
  const collectionService = new CollectionService()
  return collectionService.mapItems(data.fields.items)
})

const isSlider = data.fields.displayAs === 'slider'
const isList = data.fields.displayAs === 'list'
const isGrid = data.fields.displayAs === 'grid'

function renderNodes() {
  return {
    [BLOCKS.HEADING_4]: (node: any) => {
      return h('h4', { class: 'font-extrabold my-4' }, node.content[0].value)
    },
  }
}
</script>

<template>
  <template v-if="items">
    <template v-if="isSlider">
      <Slider :items="items" :title="data.fields.collectionTitle" />
    </template>
    <template v-if="isList">
      <Accordion :items="items" :title="data.fields.collectionTitle">
        <template #title="item">
          {{ (item as Item).title }}
        </template>
        <template #content="item">
          <NuxtImg
            v-if="(item as Item).image && (item as Item).type === 'hotel'"
            loading="lazy"
            provider="contentful"
            :src="(item as Item).image"
            width="400"
            class="mb-4 rounded-xl"
          />
          <RichText v-if="(item as Item).richText" :document="(item as Item).text" :node-renderers="renderNodes()" />
          <span v-else>{{ (item as Item).text }}</span>
        </template>
      </Accordion>
    </template>
    <template v-if="isGrid">
      <Grid :items="items" :title="data.fields.collectionTitle" />
    </template>
  </template>
</template>
