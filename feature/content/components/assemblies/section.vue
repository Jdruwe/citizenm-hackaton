<script setup lang="ts">
import type { TypeSection } from '~/types/contentful/marketing'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'
import Section from '~/components/section.vue'

interface Props {
  data: TypeSection<undefined, string>
}

const { data } = defineProps<Props>()

function getMappedContent(data: TypeSection<undefined, string>) {
  if (Array.isArray(data.fields.content)) {
    return data.fields.content
  }
  else {
    return [data.fields.content]
  }
}

const mappedContent = getMappedContent(data)
</script>

<template>
  <Section>
    <template v-for="(content, index) in mappedContent" :key="index">
      <ContentComponentMapper
        :data="content"
      />
    </template>
  </Section>
</template>
