<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-44 justify-center gap-x-1.5 rounded-md bg-white px-3 py-3.5 text-sm text-gray-80 shadow-sm border border-gray-40"
        >Media type : All
        <ChevronDownIcon
          class="w-5 h-5 -mr-1 text-gray-400"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <small class="px-4 text-blue" style="">Select content type</small>
          <form action="" class="px-4 pb-2">
            <div class="pt-4">
              <input type="checkbox" selected />
              <label for="All" class="px-2 py-2">All</label>
            </div>
            <div class="pt-4">
              <input type="checkbox" />
              <label for="support" class="px-2 pb-2">Support</label>
            </div>
            <div class="pt-4">
              <input type="checkbox" />
              <label for="images" class="px-2 pb-2">Images</label>
            </div>
            <div class="pt-4">
              <input type="checkbox" />
              <label for="videos" class="px-2 pb-2">Videos</label>
            </div>
            <div class="pt-4">
              <input type="checkbox" />
              <label for="text_only" class="px-2 pb-2">Text Only</label>
            </div>
          </form>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
//
<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

import { ref } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
const open = ref(false);
</script>
