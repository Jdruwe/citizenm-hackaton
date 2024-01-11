<script setup lang="ts">
interface Props {
  theme: 'Light' | 'Dark'
}

const { theme } = defineProps<Props>()

const isLight = theme === 'Light'
</script>

<template>
  <div :class="`${isLight ? 'bg-black text-white' : 'bg-white text-black'}`">
    <div class="mx-auto w-full max-w-screen-xl px-6 py-14">
      <slot />
    </div>
  </div>
</template>
