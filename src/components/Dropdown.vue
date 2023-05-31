<template>
  <!-- <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex px-3 items-center justify-center gap-x-1.5 rounded-md bg-white text-base font-medium text-gray-80 shadow-sm border border-gray-40 py-3"
        >Media Type :{{ props.name }}
        <slot name="icon"></slot>
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
        class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-s-md rounded-e-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <slot></slot> -->
  <!-- </MenuItems>
    </transition>
  </Menu> -->
</template>
//
<script setup lang="ts">
import { ref } from "vue";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
const props = defineProps({ name: String });
const open = ref(false);
</script>
