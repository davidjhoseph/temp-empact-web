<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3.5 text-sm text-gray-70 shadow-sm border border-gray-40"
        >Media type : All
        <ChevronDownIcon
          class="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <small class="text-blue px-4" style="">Select content type</small>
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
import { ref } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
const open = ref(false);
</script>
