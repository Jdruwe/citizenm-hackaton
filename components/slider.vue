<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import type { Item } from '~/feature/collection/types/item.types'

interface Props {
  items: Item[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <div class="relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14">
    <div v-for="(item, index) in items" :key="index" class="snap-center bg-white border border-gray-200 shrink-0 max-w-sm">
      <NuxtImg
        provider="contentful" class="aspect-[3/4] w-full object-cover p-2" :src="item.image" alt="" width="600"
        height="600"
      />
      <div class="p-5">
        <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
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
