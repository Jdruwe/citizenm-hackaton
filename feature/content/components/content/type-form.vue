<script setup lang="ts">
import TypeFormComponent from '~/components/type-form.vue'
import type { TypeForm } from '~/types/contentful/marketing'
import Section from '~/components/section.vue'

interface Props {
  data: TypeForm<'WITHOUT_UNRESOLVABLE_LINKS', string>
}

const { data } = defineProps<Props>()

const regex = /\/([^\/]+)$/
const match = data.fields.typeformReference.match(regex)
const id = match && match[1]
</script>

<template>
  <Section v-if="id">
    <TypeFormComponent :id="id" />
  </Section>
</template>
