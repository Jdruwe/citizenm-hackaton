<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import type { Item } from '~/feature/collection/types/item.types'

interface Props {
  title: string
  items: Item[]
}

const { title } = defineProps<Props>()
</script>

<template>
  <h2 class="mb-2 text-3xl lg:text-5xl tracking-tight font-extrabold text-gray-900">
    {{ title }}
  </h2>

  <div class="flex">
    <div class="grid grid-cols-4 gap-4">
      <div v-for="(item, index) in items" :key="index">
        <div v-if="index < 4">
          <div>
            <div class="py-5">
              <NuxtImg
                v-if="item.image"
                provider="contentful"
                class="aspect-[4/3] w-full object-cover mb-5"
                :src="item.image"
                width="300"
              />
              <h5 class="mb-2 font-medium tracking-tight text-xl text-gray-900 dark:text-white">
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
      </div>
    </div>
  </div>
</template>
