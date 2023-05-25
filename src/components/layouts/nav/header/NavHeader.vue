<template>
  <div class="flex items-center justify-between px-6 shadow">
    <BreadCrumb/>
    <div class="flex items-center space-x-4">
      <Menu as="div" class="relative">
        <MenuButton class="-m-1.5 flex items-center p-1.5">
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <div class="font-medium text-black text-micro">
                David Carrasco
              </div>
              <div class="text-gray-60 text-nano">davidcarrasco@mail.com</div>
            </div>
            <div class="w-14 h-14">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="user image"
                class="w-full h-full"
              />
            </div>
            <button>
              <ArrowDownIcon class="w-8 h-8 text-gray-60" />
            </button>
          </div>
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
          >
            <MenuItem
              v-for="item in userNavigation"
              :key="item.name"
              v-slot="{ active }"
            >
              <a
                :href="item.href"
                :class="[
                  active ? 'bg-gray-50' : '',
                  'block px-3 py-1 text-sm leading-6 text-gray-900',
                ]"
                >{{ item.name }}</a
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from '../../../common/BreadCrumb.vue'
import { ArrowDownIcon } from "../../../icons/AllIcons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
