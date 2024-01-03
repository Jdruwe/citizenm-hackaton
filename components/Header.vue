<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 drop-shadow">
    <div class="flex flex-wrap justify-between md:justify-normal items-center mx-auto max-w-screen-xl p-4 md:space-x-14">
      <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/citizenm-logo-black.svg" class="h-8" alt="CitizenM Logo">
      </a>
      <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1 md:self-end">
        <ul class="flex flex-col p-4 pl-0 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700 font-extrabold">
              bekijk hotels per stad <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700 font-extrabold">vergaderingen</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700 font-extrabold">lidmaatschap</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700 font-extrabold">groepen</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="mega-menu-full-dropdown" class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 hidden">
      <ul class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-4 md:px-6">
        <li>
          <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="font-semibold">Online Stores</div>
            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
        <li>
          <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="font-semibold">Segmentation</div>
            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
        <li>
          <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="font-semibold">Marketing CRM</div>
            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
