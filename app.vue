<script setup>
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
</script>

<template>
  <FwbTabs v-model="activeTab" class="p-5">
    <FwbTab name="first" title="First">
      Lorem ipsum dolor... 1
    </FwbTab>
    <FwbTab name="second" title="Second">
      Lorem ipsum dolor... 2
    </FwbTab>
    <FwbTab name="third" title="Third">
      Lorem ipsum dolor... 3
    </FwbTab>
    <FwbTab name="fourth" title="Fourth" disabled>
      Lorem ipsum dolor... 4
    </FwbTab>
  </FwbTabs>
</template>
