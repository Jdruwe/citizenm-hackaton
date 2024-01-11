<script setup lang="ts">
interface Props {
  title: string
  items: any[]
}

const { title } = defineProps<Props>()
const uid = getCurrentInstance()?.uid

</script>

<template>
  <h2 class="mb-2 text-3xl lg:text-5xl tracking-tight font-extrabold text-gray-900">
    {{ title }}
  </h2>


  <div class="flex">
    <div class="grid grid-cols-4 gap-4">
     <div v-for="(item, index) in items" :key="index">
       <div v-if="index < 4">
       <div>
         <div class="py-5">

          <NuxtImg
              v-if="item.image"
              provider="contentful"
              class="aspect-[3/4]"
              :src="item.image"
              width="300"
          />
           <h5 class="mb-2 ml-2 font-medium tracking-tight text-gray-900 dark:text-white">
             {{ item.title }}
           </h5>
          </div>
        </div>
      </div>
       </div>
    </div>
  </div>
</template>