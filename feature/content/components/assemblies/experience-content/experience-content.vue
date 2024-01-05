<script setup lang="ts">
import type { TypeExperienceContent } from '~/types/contentful/marketing'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'

interface Props {
  data: TypeExperienceContent<undefined, string>
}

const { data } = defineProps<Props>()

function getMappedContent(data: TypeExperienceContent<undefined, string>) {
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
  <div>
    <template v-for="content in mappedContent">
      <ContentComponentMapper
        :data="content"
      />
    </template>
  </div>
</template>
