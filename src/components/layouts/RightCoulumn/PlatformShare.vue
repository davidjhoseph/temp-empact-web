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
      <div class="flex justify-between px-9 pt-6">
        <h1 class="capitalize text-black text-xl font-bold">Platform Shares</h1>
        <Filter />
      </div>
      <main class="py-10 px-6">
        <div class="sm:px-6 lg:px-4">
          <!-- Your content -->

          <div class="px-6 border border-gray-70 rounded-md">
            <!-- <h1 class="text-xl font-bold text-black pb-8">Platform Shares</h1> -->
            <div>
              <div class="text-lg text-black font-semibold pt-4 pb-4 pl-4">
                All Shares
              </div>
              <div
                class="grid grid-cols-3 gap-y-4 gap-x-96 pb-6"
                v-for="x in recentShares"
              >
                <div class="flex space-x-2 items-center pl-4">
                  <img
                    :src="`/src/assets/images/${x.icon}`"
                    alt=""
                    class="h-4 w-4"
                  />
                  <p class="capitalize text-blacK">{{ x?.platform }}</p>
                </div>
                <div class="flex space-x-2 items-end">
                  <img src="/src/assets/images/DG.png" alt="" />
                  <div class="text-gray-80 capitalize">{{ x?.name }}</div>
                </div>
                <div class="flex space-x-2 items-center ml-6">
                  <div class="text-gray-80">{{ x?.date }}</div>
                  <div><Ellipse /></div>
                  <div class="text-gray-80">{{ x?.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!--  -->
  </FullPrimarySidebar>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import FullPrimarySidebar from "../nav/sidebar/FullPrimarySidebar.vue";
import Filter from "./Filter.vue";
import Vector from "../../icons/Vector.vue";
import ArrowRightIcon from "../../icons/ArrowRightIcon.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import Ellipse from "../../icons/Ellipse.vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const sidebarOpen = ref(false);

const recentShares = reactive([
  {
    id: 1,
    name: "David Green",
    value: 1567,
    icon: "vector (5).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "whatsapp",
  },
  {
    id: 2,
    name: "David Green",
    value: 1567,
    icon: "Telegram.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "telegram",
  },
  {
    id: 3,
    name: "David Green",
    value: 1567,
    icon: "Instagram.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "instagram",
  },
  {
    id: 4,
    name: "David Green",
    value: 1567,
    icon: "Vector (6).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "linked copy",
  },
  {
    id: 5,
    name: "David Green",
    value: 1567,
    icon: "Twitter.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "twitter",
  },
  {
    id: 6,
    name: "David Green",
    value: 1567,
    icon: "Mail.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "email",
  },
  {
    id: 7,
    name: "David Green",
    value: 1567,
    icon: "Vector (5).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "whatsapp",
  },
  {
    id: 8,
    name: "David Green",
    value: 1567,
    icon: "Facebook.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "facebook",
  },
  {
    id: 9,
    name: "David Green",
    value: 1567,
    icon: "vector (5).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "whatsapp",
  },
  {
    id: 10,
    name: "David Green",
    value: 1567,
    icon: "Instagram.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "instagram",
  },
  {
    id: 11,
    name: "David Green",
    value: 1567,
    icon: "Vector (6).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "linked copy",
  },
  {
    id: 12,
    name: "David Green",
    value: 1567,
    icon: "Twitter.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "twitter",
  },
  {
    id: 13,
    name: "David Green",
    value: 1567,
    icon: "Mail.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "email",
  },
  {
    id: 14,
    name: "David Green",
    value: 1567,
    icon: "Vector (5).png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "whatsapp",
  },
  {
    id: 15,
    name: "David Green",
    value: 1567,
    icon: "Facebook.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "facebook",
  },
  {
    id: 16,
    name: "David Green",
    value: 1567,
    icon: "Telegram.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "telegram",
  },
]);
</script>
