<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import RichText from 'contentful-rich-text-vue-renderer'
import type { Item } from '~/feature/collection/types/item.types'
import 'swiper/css'
import 'swiper/css/navigation'

interface Props {
  title: string
  items: Item[]
}

const { title, items } = defineProps<Props>()

let swiperInstance: typeof Swiper | undefined

// TODO [HACKATHON]: remove the filter and provide proper rendering for FAQ inside the slider
const filteredItems = items.filter(item => item.type !== 'faq')

const breakpoints = {
  800: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}
const modules = [
  Navigation,
]

const swiper = reactive({
  instance: null as typeof Swiper | null,
})

function setSwiperReference(instance: typeof Swiper) {
  swiper.instance = instance
}

function showPreviousSlide() {
  swiper.instance?.slidePrev()
}

function showNextSlide() {
  swiper.instance?.slideNext()
}

const isBeginning = computed(() => swiper.instance?.isBeginning)
const isEnd = computed(() => swiper.instance?.isEnd)
</script>

<template>
  <h2 class="font-medium text-5xl mb-6">
    {{ title }}
  </h2>
  <div class="flex">
    <button class="mr-10 group" :disabled="isBeginning" @click="showPreviousSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-disabled:text-gray-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
    <Swiper
      class="flex-1"
      :slides-per-view="1.5"
      :space-between="15"
      :modules="modules"
      :breakpoints="breakpoints"
      :free-mode="true"
      @swiper="setSwiperReference"
    >
      <SwiperSlide v-for="item in filteredItems" :key="item.id">
        <NuxtImg
          v-if="item.image"
          provider="contentful"
          class="aspect-[3/4] w-full object-cover"
          :src="item.image"
          width="600"
        />
        <div class="py-5">
          <h5 class="mb-2 ml-2 font-medium tracking-tight text-gray-900 dark:text-white">
            {{ item.title }}
          </h5>
          <p v-if="item.text && !item.richText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.text }}
          </p>
          <p v-if="item.text && item.richText" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <RichText :document="item.text" />
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
    <button class="ml-10 group" :disabled="isEnd" @click="showNextSlide()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-disabled:text-gray-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  </div>
</template>
