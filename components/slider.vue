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
      <div class="max-w-xs bg-white border border-gray-200">
        <!--        <NuxtImg provider="contentful" class="p-2" :src="item.image" alt="" width="600" height="600" /> -->
        <img class="aspect-[3/2] w-full object-cover p-2" src="https://www.vakantiediscounter.nl/blog/wp-content/uploads/2019/05/sterren-hotel.jpg"></img>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.text }}
          </p>
          <!--          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> -->
          <!--            Read more -->
          <!--          </a> -->
        </div>
      </div>
      <div class="max-w-xs bg-white border border-gray-200">
        <NuxtImg provider="contentful" class="aspect-[3/2] w-full object-cover p-2" :src="item.image" alt="" width="600" height="600" />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.text }}
          </p>
          <!--          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> -->
          <!--            Read more -->
          <!--          </a> -->
        </div>
      </div>
    </template>
  </div>
</template>
