<script setup lang="ts">
import type { TypeContentCanvas } from '~/types/contentful/marketing'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'
import Hero from '~/feature/content/components/content/hero.vue'
import Section from '~/components/section.vue'

interface Props {
  data: TypeContentCanvas<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

function getMappedContent(data: TypeContentCanvas<'WITHOUT_UNRESOLVABLE_LINKS', string>) {
  if (Array.isArray(data.fields.content)) {
    return data.fields.content
  }
  else {
    return [data.fields.content]
  }
}

const hero = data.fields.hero
const mappedContent = getMappedContent(data)
</script>

<template>
  <Section v-if="hero">
    <Hero :data="hero" />
  </Section>
  <template v-for="content in mappedContent">
    <ContentComponentMapper
      :data="content"
    />
  </template>
</template>
