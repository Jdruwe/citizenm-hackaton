<script setup lang="ts">
interface Props {
  title: string
  items: any[]
}

const { title } = defineProps<Props>()
const uid = getCurrentInstance()?.uid
</script>

<template>
  <h2 class="mb-2 text-3xl lg:text-5xl tracking-tight font-extrabold text-gray-900">
    {{ title }}
  </h2>
  <div
    :id="`accordion-flush-${uid}`"
    data-accordion="collapse"
    data-active-classes="bg-white text-gray-900"
    data-inactive-classes="text-gray-900"
  >
    <div v-for="(item, index) in items" :key="index">
      <h2 :id="`accordion-flush-heading-${uid}-${index}`">
        <button
          type="button"
          class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200"
          :data-accordion-target="`#accordion-flush-body-${uid}-${index}`" aria-expanded="false"
          :aria-controls="`accordion-flush-body-${uid}-${index}`"
        >
          <span class="font-extrabold md:ml-16 text-xl">
            <slot name="title" v-bind="item" />
          </span>
          <svg
            data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </h2>
      <div :id="`accordion-flush-body-${uid}-${index}`" class="hidden" :aria-labelledby="`accordion-flush-heading-${uid}-${index}`">
        <div class="py-5 border-b border-gray-200">
          <div class="md:ml-16">
            <slot name="content" v-bind="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
