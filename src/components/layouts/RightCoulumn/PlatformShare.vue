<template>
  <div class="flex justify-between px-9 pt-2">
    <h1 class="capitalize text-black text-xl font-bold">Platform Shares</h1>
    <Filter />
  </div>
  <main class="py-10 px-6">
    <div class="sm:px-6 lg:px-4">
      <!-- Your content -->
      <div class="px-6 border border-gray-70 rounded-md">
        <div>
          <div class="text-lg text-black font-semibold pt-4 pb-4 ps-4">
            All Shares
          </div>
          <div
            class="grid grid-cols-3 gap-y-4 gap-x-96 pb-6"
            v-for="x in recentShares"
          >
            <div class="flex space-s-2 items-center ps-4">
              <img :src="`/images/${x.icon}`" alt="" class="h-4 w-4" />
              <p class="capitalize text-blacK">{{ x?.platform }}</p>
            </div>
            <div class="flex space-s-2 items-end">
              <img src="/images/DG.png" alt="" />
              <div class="text-gray-80 capitalize">{{ x?.name }}</div>
            </div>
            <div class="flex space-s-2 items-center ms-6">
              <div class="text-gray-80">{{ x?.date }}</div>
              <div><Ellipse /></div>
              <div class="text-gray-80">{{ x?.time }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Filter from "../../layouts/RightCoulumn/Filter.vue";

import Ellipse from "../../icons/Ellipse.vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const sidebarOpen = ref(false);

const recentShares = ref([
  {
    id: 1,
    name: "David Green",
    value: 1567,
    icon: "Whatsapp.png",
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
    icon: "link.png",
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
    icon: "Whatsapp.png",
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
    icon: "Whatsapp.png",
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
    icon: "link.png",
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
    icon: "Whatsaspp.png",
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
