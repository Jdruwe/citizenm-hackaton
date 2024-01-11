<script setup lang="ts">
import { ContentfulPageConnector } from '~/feature/content/connectors/contenful/contentful-page-connector'
import {
  type TypeContentCanvas,
  isTypeContentCanvas,
} from '~/types/contentful/marketing'
import Hero from '~/feature/content/components/content/hero.vue'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'

interface Props {
  slug: string
}

const { slug } = defineProps<Props>()

const { data, error } = await useAsyncData(`pageContent-${slug}`, () => {
  const contentfulPageConnector = new ContentfulPageConnector()
  return contentfulPageConnector.getPageContent(slug)
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Er is iets misgelopen, probeer later opnieuw.',
  })
}

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Deze pagina bestaat niet (meer).',
  })
}

const contentCanvas = data.value.fields.pageType
const isContentCanvas = contentCanvas && isTypeContentCanvas(contentCanvas)
const hero = contentCanvas && (contentCanvas as TypeContentCanvas<'WITHOUT_UNRESOLVABLE_LINKS', string>).fields.hero
</script>

<template>
  <template v-if="isContentCanvas">
    <Section v-if="hero">
      <Hero :data="hero" />
    </Section>
    <ContentComponentMapper
      :data="contentCanvas"
    />
  </template>
</template>
