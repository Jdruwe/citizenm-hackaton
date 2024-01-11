<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'Light',
  },
})

const isLight = props.theme === 'Light'
</script>

<template>
  <div :class="`${isLight ? 'bg-white text-black' : 'bg-black text-white'}`">
    <div class="mx-auto w-full max-w-screen-xl px-6 py-14">
      <slot />
    </div>
  </div>
</template>
