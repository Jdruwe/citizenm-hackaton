<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

const { error } = defineProps<Props>()
</script>

<template>
  <NuxtLayout>
    <Section>
      <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500 mt-10">
        error {{ error.statusCode }}
      </h1>
      <p class="mb-4 text-lg font-light text-gray-700">
        {{ error.statusMessage }}
      </p>
      <NuxtLink to="/" class="inline-block bg-red-600 text-white rounded-md p-4">
        home
      </NuxtLink>
    </Section>
  </NuxtLayout>
</template>
