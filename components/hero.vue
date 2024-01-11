<script setup lang="ts">
import { BLOCKS, type Document } from '@contentful/rich-text-types'
import RichText from 'contentful-rich-text-vue-renderer'

interface Props {
  title: string
  image: string
  description?: Document
  variation?: string
}

const { title, image, description, variation } = defineProps<Props>()
const isOffGrid = variation === 'off-grid'

function renderNodes() {
  return {
    [BLOCKS.PARAGRAPH]: (node: any) => {
      return h('p', { class: 'my-4' }, node.content[0].value)
    },
    [BLOCKS.HEADING_2]: (node: any) => {
      return h('h2', { class: 'text-3xl mt-4' }, node.content[0].value)
    },
  }
}
</script>

<template>
  <div v-if="isOffGrid">
    <div class="relative mt-16 md:mt-28">
      <h1 class="text-4xl sm:text-6xl lg:text-8xl max-w-60 sm:max-w-sm md:max-w-md lg:max-w-md absolute -mt-14 lg:-mt-28 z-10">
        {{ title }}
      </h1>
      <div class="md:max-w-screen-sm lg:max-w-screen-lg mx-auto relative z-0">
        <NuxtImg
          provider="contentful"
          class="aspect-[4/2] w-full object-cover"
          :src="image"
          width="600"
        />
        <div class="mt-10 lg:-ml-4 text-lg">
          <RichText v-if="description" :document="description" :node-renderers="renderNodes()" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="relative">
      <h1 class="text-4xl mb-4">
        {{ title }}
      </h1>
      <div class="md:max-w-screen-sm lg:max-w-screen-lg  relative z-0">
        <NuxtImg
          provider="contentful"
          class="aspect-[4/2] w-full object-cover"
          :src="image"
          width="800"
        />
        <div class="max-w-screen-md">
          <RichText v-if="description" :document="description" :node-renderers="renderNodes()" />
        </div>
      </div>
    </div>
  </div>
</template>
