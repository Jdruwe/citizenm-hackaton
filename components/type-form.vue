<script setup lang="ts">
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'

interface Props {
  id: string
}

const { id } = defineProps<Props>()

const form = ref<HTMLElement | null>(null)

onMounted(() => {
  form.value && createWidget(id, { container: form.value })
})
</script>

<template>
  <form ref="form" class="aspect-[4/3] max-w-md mx-auto" />
</template>
