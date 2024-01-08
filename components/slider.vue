<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import type { Item } from '~/feature/collection/types/item.types'

interface Props {
  title: string
  items: Item[]
}

const { title, items } = defineProps<Props>()
</script>

<template>
  <h2 class="font-medium text-5xl mb-6">
    {{ title }}
  </h2>
  <div class="relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14">
    <div v-for="(item, index) in items" :key="index" class="snap-center bg-white shrink-0 max-w-xs">
      <NuxtImg
        provider="contentful" class="aspect-[3/4] w-full object-cover" :src="item.image" alt="" width="600"
        height="600"
      />
      <div class="py-5">
        <h5 class="mb-2 ml-2 font-medium tracking-tight text-gray-900 dark:text-white">
          {{ item.title }}
        </h5>
        <p v-if="item.text && !item.richText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ item.text }}
        </p>
        <p v-if="item.text && item.richText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <RichText :document="item.text" />
        </p>
      </div>
    </div>
  </div>
</template>
