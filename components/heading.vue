<script setup lang="ts">
interface Props {
  classes: string[]
}

const { classes } = defineProps<Props>()
</script>

<template>
  <h5 :class="classes" />
</template>
