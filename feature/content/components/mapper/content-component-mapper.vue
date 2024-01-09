<script setup lang="ts">
import type { Entry, EntrySkeletonType } from 'contentful'
import { isTypeContentCanvas, isTypeCuratedCollection, isTypeForm, isTypeSection } from '~/types/contentful/marketing'
import Section from '~/feature/content/components/assemblies/section.vue'
import CuratedCollection from '~/feature/content/components/assemblies/curated-collection.vue'
import ContentCanvas from '~/feature/content/components/assemblies/content-canvas.vue'
import TypeForm from '~/feature/content/components/content/type-form.vue'

interface Props {
  data: Entry<EntrySkeletonType, undefined, string>
}

const { data } = defineProps<Props>()
</script>

<template>
  <template v-if="isTypeContentCanvas(data)">
    <ContentCanvas :data="data" />
  </template>
  <template v-if="isTypeSection(data)">
    <Section :data="data" />
  </template>
  <template v-if="isTypeCuratedCollection(data)">
    <CuratedCollection :data="data" />
  </template>
  <template v-if="isTypeForm(data)">
    <TypeForm :data="data" />
  </template>
</template>
