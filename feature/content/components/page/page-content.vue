<script setup lang="ts">
import { ContentfulPageConnector } from '~/feature/content/connectors/contenful/contentful-page-connector'

interface Props {
  slug: string[]
}

const { slug } = defineProps<Props>()

const { data: value } = await useAsyncData('pageContent', () => {
  const contentfulPageConnector = new ContentfulPageConnector()
  return contentfulPageConnector.getPageContent(slug)
})
</script>

<template>
  <p>PageContent: slug = {{ slug }}</p>
  <p>Value: {{ value }}</p>
</template>
