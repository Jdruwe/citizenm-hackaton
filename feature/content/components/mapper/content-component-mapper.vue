<script setup lang="ts">
import type { Entry, EntrySkeletonType } from 'contentful'
import Section from '~/feature/content/components/assemblies/section.vue'
import CuratedCollection from '~/feature/content/components/assemblies/curated-collection.vue'
import TypeForm from '~/feature/content/components/content/type-form.vue'
import { isTypeCuratedCollection, isTypeForm, isTypeSection } from '~/types/contentful/marketing'

interface Props {
  data: Entry<EntrySkeletonType, 'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

// TODO: specify type
function getMappedContent(data: any) {
  if (data.fields.content === undefined) {
    return []
  }

  if (!Array.isArray(data.fields.content)) {
    return [data]
  }

  return data.fields.content
}

const mappedContent = getMappedContent(data)
</script>

<template>
  <template v-for="contentItem in mappedContent" :key="contentItem.sys.id">
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
