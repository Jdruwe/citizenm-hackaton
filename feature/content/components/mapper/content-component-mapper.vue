<script setup lang="ts">
import Section from '~/feature/content/components/assemblies/section.vue'
import CuratedCollection from '~/feature/content/components/assemblies/curated-collection.vue'
import TypeForm from '~/feature/content/components/content/type-form.vue'
import {
  isTypeCuratedCollection,
  isTypeForm,
  isTypeSection,
} from '~/types/contentful/marketing'
import type { ContentComponentProps, ContentComponentTypes } from '~/feature/content/types/content-component.types'

type ContentComponentMapperProps = ContentComponentProps<ContentComponentTypes>

const { data } = defineProps<ContentComponentMapperProps>()

function getMappedContent(data: ContentComponentMapperProps['data']) {
  if (!data.fields.content) {
    return []
  }

  return data.fields.content
}

const mappedContent = getMappedContent(data)
</script>

<template>
  <template v-for="contentItem in mappedContent" :key="contentItem.sys.id">
    <template v-if="contentItem">
      <template v-if="isTypeSection(contentItem)">
        <Section :data="contentItem" />
      </template>
      <template v-if="isTypeCuratedCollection(contentItem)">
        <CuratedCollection :data="contentItem" />
      </template>
      <template v-if="isTypeForm(contentItem)">
        <TypeForm :data="contentItem" />
      </template>
    </template>
  </template>
</template>
