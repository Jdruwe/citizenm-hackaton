<script setup lang="ts">
import { ContentfulPageConnector } from '~/feature/content/connectors/contenful/contentful-page-connector'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'
import { isTypeContentCanvas } from '~/types/contentful/marketing'

interface Props {
  slug: string
}

const { slug } = defineProps<Props>()

const { data, error } = await useAsyncData('pageContent', () => {
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
</script>

<template>
  <ContentComponentMapper
    v-if="isContentCanvas"
    :data="contentCanvas"
  />
</template>
