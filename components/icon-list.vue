<script setup lang="ts">
import type { Feature } from '~/feature/feature/types/feature.types'

interface Props {
  items: Feature[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <ul class="space-y-4 text-left">
    <li v-for="(item, index) in items" :key="index" class="flex items-center space-x-3 rtl:space-x-reverse">
      <NuxtImg
        provider="contentful"
        class="aspect-square w-6"
        :src="item.icon"
        width="50"
      />
      <span class="text-md font-bold">{{ item.title }}</span>
    </li>
  </ul>
</template>
