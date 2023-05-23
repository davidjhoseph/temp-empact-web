<template>
  <FullPrimarySidebar>
    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex justify-between h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex items-center space-x-5">
          <div
            class="border-2 rounded-full h-6 w-6 mt-2 border-gray-60 flex justify-center items-center"
          >
            <Vector class="items-center px-1 h-6 w-6" />
          </div>
          <div class="h-5">
            <a href="#" class="text-gray-60 text-base"> Community</a>
          </div>
          <div class="h-5 w-5 flex justify-center items-center">
            <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
          </div>
          <div class="h-5">
            <a href="" class="text-base text-blue">Content Manager</a>
          </div>
        </div>
        <!-- Profile dropdown -->
        <Menu as="div" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5">
            <span class="sr-only">Open user menu</span>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <div class="text-black font-medium text-micro">
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
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
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
      <main class="py-10">
        <div class="sm:px-6 lg:px-4">
          <!-- Your content -->

          <RouterView v-slot="{ Component, route }">
            <transition name="fastfade" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </main></div
  ></FullPrimarySidebar>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import FullPrimarySidebar from "../layouts/nav/sidebar/FullPrimarySidebar.vue";
import AllContent from "./RightCoulumn/AllContent.vue";
import Vector from "../icons/Vector.vue";
import ArrowRightIcon from "../icons/ArrowRightIcon.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Archive from "./RightCoulumn/Archive.vue";
import Drafts from "./RightCoulumn/Drafts.vue";
import Publish from "./RightCoulumn/Publish.vue";
import { PlusIcon } from "@heroicons/vue/20/solid";
// import AllContent from "./RightCoulumn/AllContent.vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const sidebarOpen = ref(false);
</script>
