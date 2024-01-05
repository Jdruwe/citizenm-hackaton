<script setup lang="ts">
import type { Item } from '~/feature/collection/types/item.types'

interface Props {
  items: Item[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-row space-x-4">
    <template v-for="item in items">
      <div class="max-w-xs bg-white border border-gray-200 flex-1">
        <NuxtImg
          provider="contentful" class="aspect-[3/4] w-full object-cover p-2" :src="item.image" alt="" width="600"
          height="600"
        />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
          </a>
          <p v-if="item.text && !item.htmlText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.text }}
          </p>
          <ClientOnly>
            <p v-if="item.text && item.htmlText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span v-html="item.text" />
            </p>
          </ClientOnly>
        </div>
      </div>
    </template>
  </div>
</template>
