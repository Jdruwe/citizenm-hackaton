<script setup lang="ts">
interface Props {
  text: string
}

const { text } = defineProps<Props>()
</script>

<template>
  <div>
    <span class="block border-t-2 border-red-400 mb-3 w-40" />
    <span class="inline-block">{{ text }}</span>
  </div>
</template>
