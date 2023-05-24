<template>
  <div class="flex items-center justify-between px-6 shadow">
    <div class="flex items-center space-x-5">
      <div
        @click="router.back()"
        class="flex items-center justify-center w-6 h-6 mt-2 border-2 rounded-full cursor-pointer border-gray-60"
      >
        <Vector class="items-center w-6 h-6 px-1" />
      </div>
      <div
        class="flex items-center space-x-4"
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
      >
        <div class="h-5">
          <a
            href="#"
            class="text-base"
            :class="
              index + 1 === breadcrumbs.length ? 'text-blue' : 'text-gray-60'
            "
          >
            {{ crumb }}</a
          >
        </div>
        <div
          class="flex items-center justify-center w-5 h-5 mt-1"
          v-if="index + 1 !== breadcrumbs.length"
        >
          <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
        </div>
      </div>
    </div>
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
                class="w-full h-full rounded-full"
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
import { ArrowDownIcon, Vector, ArrowRightIcon } from "../../../icons/AllIcons";
import { useRouter, useRoute } from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ComputedRef, computed } from "vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const router = useRouter();
const route = useRoute();
const breadcrumbs = computed(() => route.meta.breadcrumbs) as ComputedRef<[]>;
</script>
