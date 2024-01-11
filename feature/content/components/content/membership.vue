<script setup lang="ts">
import IconList from '~/components/icon-list.vue'

const items = [
  {
    text: 'work from global hotels',
    icon: 'replace me by actual data',
  },
  {
    text: 'guaranteed lowest price, always',
    icon: 'replace me by actual data',
  },
]
</script>

<template>
  <div class="flex">
    <div class="basis-4/6">
      <h2 class="max-w-lg text-5xl mb-10">
        what is a mycitizenM+ membership?
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec dui. Quam id leo in vitae turpis massa sed elementum. Integer malesuada nunc vel risus commodo viverra maecenas. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Viverra tellus in hac habitasse platea. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Et tortor consequat id porta nibh. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Neque laoreet suspendisse interdum consectetur libero.
      </p>
    </div>
    <div class="basis-2/5 ml-10">
      <IconList :items="items" />
    </div>
  </div>
</template>
