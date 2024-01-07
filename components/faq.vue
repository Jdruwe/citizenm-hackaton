<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import type { Faq } from '~/feature/hotel/types/hotel.types'
import Location from '~/components/location.vue'
import { isTypeLocation } from '~/types/contentful/masterdata'

interface Props {
  faqs: Faq[]
}

const { faqs } = defineProps<Props>()

function renderNodes() {
  return {
    [BLOCKS.HEADING_4]: (node: any) => {
      return h('h4', { class: 'font-extrabold mb-4' }, node.content[0].value)
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (isTypeLocation(node.data.target)) {
        const fields = node.data.target.fields
        return h(Location, {
          isRichTextEmbedded: true,
          data: {
            city: fields.city.fields.name,
            street: fields.street,
            postalCode: fields.postalCode,
            lat: fields.coordinates.lat,
            lon: fields.coordinates.lon,
          },
        })
      }
    },
  }
}
</script>

<template>
  <section>
    <h2 class="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
      Frequently asked questions
    </h2>
    <div
      id="accordion-flush" data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <div v-for="(faq, index) in faqs" :key="index">
        <h2 :id="`accordion-flush-heading-${index}`">
          <button
            type="button"
            class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            :data-accordion-target="`#accordion-flush-body-${index}`" aria-expanded="false"
            :aria-controls="`accordion-flush-body-${index}`"
          >
            <span>{{ faq.question }}</span>
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
        <div :id="`accordion-flush-body-${index}`" class="hidden" :aria-labelledby="`accordion-flush-heading-${index}`">
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <RichText :document="faq.answer" :node-renderers="renderNodes()" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
