<script setup lang="ts">
import RichText from 'contentful-rich-text-vue-renderer'
import { type TypeMediaText, isTypeImage } from '~/types/contentful/marketing'

interface Props {
  data: TypeMediaText<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()
const { media, title, content, layout, topline } = data.fields

let imageUrl
if (media && isTypeImage(media)) {
  imageUrl = media.fields.asset?.fields.file?.url
}

let description
if (content) {
  description = content.fields.content
}

let toplineText
if (topline && topline.fields.text) {
  toplineText = topline.fields.text
}
</script>

<template>
  <div v-if="data && layout === 'Media left (default)'" class="flex flex-col md:flex-row">
    <div class="flex-1 mb-10 md:mb-0">
      <NuxtImg
        provider="contentful"
        class="aspect-[2/1] md:aspect-square object-cover w-full"
        :src="imageUrl"
        width="600"
      />
    </div>
    <div class="flex-1">
      <div class="md:ml-10 lg:ml-20">
        <div class="mb-10">
          <Topline v-if="toplineText" :text="toplineText" />
        </div>
        <h2 class="text-4xl lg:text-6xl font-extrabold max-w-sm mb-10">
          {{ title }}
        </h2>
        <RichText v-if="content" :document="description" />
      </div>
    </div>
  </div>
  <div v-if="data && layout === 'Media right'" class="flex flex-col md:flex-row">
    <div class="flex-1">
      <div class="md:mr-10 lg:mr-20">
        <div class="mb-10">
          <Topline v-if="toplineText" :text="toplineText" />
        </div>
        <h2 class="text-4xl lg:text-6xl font-extrabold max-w-sm mb-10">
          {{ title }}
        </h2>
        <RichText v-if="content" :document="description" />
      </div>
    </div>
    <div class="flex-1 mb-10">
      <NuxtImg
        provider="contentful"
        class="aspect-[2/1] md:aspect-square object-cover w-full"
        :src="imageUrl"
        width="600"
      />
    </div>
  </div>
</template>
