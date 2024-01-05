<script setup lang="ts">
import type { Entry, EntrySkeletonType } from 'contentful'
import { isTypeCuratedCollection, isTypeExperienceContent, isTypeSection } from '~/types/contentful/marketing'
import ExperienceContent from '~/feature/content/components/assemblies/experience-content/experience-content.vue'
import Section from '~/feature/content/components/assemblies/section-content/section.vue'
import CuratedCollection from '~/feature/content/components/assemblies/curated-collection/curated-collection.vue'

interface Props {
  data: Entry<EntrySkeletonType, undefined, string>
}

const { data } = defineProps<Props>()
</script>

<template>
  <template v-if="isTypeExperienceContent(data)">
    <ExperienceContent :data="data" />
  </template>
  <template v-if="isTypeSection(data)">
    <Section :data="data" />
  </template>
  <template v-if="isTypeCuratedCollection(data)">
    <CuratedCollection :data="data" />
  </template>
</template>
