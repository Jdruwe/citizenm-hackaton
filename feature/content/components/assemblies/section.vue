<script setup lang="ts">
import type { TypeSection } from '~/types/contentful/marketing'
import ContentComponentMapper from '~/feature/content/components/mapper/content-component-mapper.vue'
import Section from '~/components/section.vue'

interface Props {
  data: TypeSection<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()
</script>

<template>
  <Section :theme="data.fields.backgroundColour">
    <ContentComponentMapper
      :data="data"
    />
  </Section>
</template>
