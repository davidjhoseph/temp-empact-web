<template>
  <div class="flex justify-between px-9 pt-2">
    <h1 class="capitalize text-black text-xl font-bold">Platform Shares</h1>
    <Filter>
      <MenuItems
        class="absolute z-20 mt-4 w-82 rounded-md bg-white shadow-lg -end-1"
      >
        <div class="flex items-center justify-between pt-2 px-4">
          <div class="font-bold capitalize text-gray-80">Filter by date</div>
          <CloseIcon @click="open = false" class="cursor-pointer" />
        </div>
        <form action="" class="pb-4 ps-4 pe-4">
          <CalendarDate label="start date" class="py-6" />
          <CalendarDate label="end date" />
          <div class="flex justify-end pt-10 space-s-4">
            <div>
              <button
                class="h-8 capitalize border rounded-s-md rounded-e-md border-gray-40 text-gray-70"
              >
                <p class="ps-2 pe-2">cancel</p>
              </button>
            </div>
            <div>
              <button
                class="h-8 text-white capitalize bg-blue rounded-s-md rounded-e-md"
              >
                <button class="ps-3 pe-3" @click="">Apply Filter</button>
              </button>
            </div>
          </div>
        </form>
      </MenuItems>
    </Filter>
  </div>
  <main class="py-10">
    <div class="sm:px-9 lg:px-9">
      <!-- Your content -->
      <div class="px-4 border border-gray-30 rounded-md">
        <div>
          <div class="text-lg text-black font-semibold pt-4 pb-4">
            All Shares
          </div>
          <div v-for="x in recentShares">
            <div class="flex justify-between pb-6 ps-2">
              <div class="w-1/3">
                <div class="flex space-s-2 items-center">
                  <img :src="`/images/${x.icon}`" alt="" class="h-4 w-4" />
                  <p class="capitalize text-blacK">{{ x?.platform }}</p>
                </div>
              </div>
              <div class="w-1/3">
                <div class="flex space-s-2">
                  <img src="/images/DG.png" alt="" />
                  <div class="text-gray-80 capitalize">{{ x?.name }}</div>
                </div>
              </div>
              <div class="">
                <div class="flex space-s-2 items-center">
                  <div class="text-gray-80">{{ x?.date }}</div>
                  <div><Ellipse /></div>
                  <div class="text-gray-80">{{ x?.time }}</div>
                </div>
              </div>
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
import { MenuItems } from "@headlessui/vue";
import CloseIcon from "../../icons/CloseIcon.vue";
import CalendarDate from "../RightCoulumn/Calendar.vue";
const open = ref(false);
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
    icon: "Whatsapp.png",
    date: "May 20,2023",
    time: "12:30 PM",
    platform: "Whatsapp",
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
