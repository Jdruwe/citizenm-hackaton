<script setup lang="ts">
import { type TypeHero, isTypeImage } from '~/types/contentful/marketing'
import Hero from '~/components/hero.vue'

interface Props {
  data: TypeHero<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

let heroImage
const { media, description, title } = data.fields
if (media) {
  if (isTypeImage(media)) {
    const assetUrl = media.fields.asset?.fields.file?.url
    if (assetUrl) {
      heroImage = assetUrl
    }
  }
}
</script>

<template>
  <Hero v-if="title && heroImage" :title="title" :image="heroImage" :description="description" />
</template>
