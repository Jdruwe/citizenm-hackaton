<script setup lang="ts">
interface Props {
  items: [
    {
      text: string
      icon: string
    },
  ]
}

const { items } = defineProps<Props>()
</script>

<!-- TODO: use the icon -->
<template>
  <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li v-for="(item, index) in items" :key="index" class="flex items-center space-x-3 rtl:space-x-reverse">
      <svg
        class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span class="text-lg font-bold">{{ item.text }}</span>
    </li>
  </ul>
</template>
