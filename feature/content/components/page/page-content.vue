<script setup lang="ts">
import { ContentfulPageConnector } from '~/feature/content/connectors/contenful/contentful-page-connector'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'
import Section from '~/components/section.vue'

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

const contentPage = data.value.fields.pageType
</script>

<template>
  <Section>
    <ContentComponentMapper
      :data="contentPage"
    />
  </Section>
</template>
