<template>
  <main class="py-6 px-6">
    <div class="sm:px-9 lg:px-4">
      <!-- Your content -->
      <div class="flex justify-between pb-2 -mt-4 items-center">
        <div class="text-black text-2xl font-bold">Content Statistics</div>
        <div class="flex space-s-4">
          <div>
            <Filter>
              <MenuItems
                class="absolute z-20 mt-4 w-82 rounded-md bg-white shadow-lg"
              >
                <div class="flex items-center justify-between pt-2 px-4">
                  <div class="font-normal text-lg capitalize text-gray-80">
                    Filter by date
                  </div>
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
                        <p class="px-2">cancel</p>
                      </button>
                    </div>
                    <div>
                      <button
                        class="h-8 text-white capitalize bg-blue rounded-md"
                      >
                        <button class="px-3" @click="">Apply Filter</button>
                      </button>
                    </div>
                  </div>
                </form>
              </MenuItems>
            </Filter>
          </div>
          <button class="">
            <div
              class="flex justify-center items-center space-s-2 h-12 w-44 rounded-md border border-gray-40 px-2"
            >
              <div><DownloadIcon /></div>
              <div class="text-gray-70 text-lg font-normal">
                Download Report
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="my-10">
        <div class="flex justify-between items-center space-s-3">
          <div v-for="i in stats" :key="i.id" class="w-1/5">
            <div class="h-28 border-gray-30 border rounded-lg">
              <div class="py-5 px-4 flex flex-col space-y-2">
                <h3 class="text-blue text-xl font-medium">{{ i.value }}</h3>
                <div class="flex space-s-1 items-center">
                  <div>
                    <EyeIcon v-if="i.id == 1" />
                    <LoveIcon v-if="i.id == 2" />
                    <ShareIcon v-if="i.id == 3" />
                    <EyeIcon v-if="i.id == 4" />
                    <EyeIcon v-if="i.id == 5" />
                  </div>
                  <p class="text-gray-60 text-lg font-medium">{{ i.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="border border-gray-30 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black-DEFAULT text-xl">
              Platform Shares
            </div>
          </div>
          <div class="py-2 px-4" v-for="x in platforms" :key="x?.id">
            <div class="flex justify-between">
              <div class="flex space-s-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-black-DEFAULT font-normal text-lg">
                  {{ x?.name }}
                </div>
              </div>
              <div class="text-gray-80 font-normal text-lg">{{ x?.value }}</div>
            </div>
          </div>
        </div>
        <div class="border border-gray-30 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black-DEFAULT text-xl">
              Recent Shares
            </div>
            <button class="text-gray-60 font-normal text-lg">
              <div class="flex space-s-2 items-center">
                <div
                  @click="router.push({ path: '/content-management/platform' })"
                >
                  View All
                </div>
                <ArrowRightIcon />
              </div>
            </button>
          </div>
          <div class="py-2 px-4" v-for="x in recentShares" :key="x?.id">
            <div class="flex justify-between">
              <div class="flex space-s-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-black-DEFAULT font-normal text-lg">
                  {{ x?.name }}
                </div>
              </div>
              <div class="flex space-s-2 items-center">
                <div class="text-gray-80 font-normal text-lg">
                  {{ x?.date }}
                </div>
                <div><Ellipse /></div>
                <div class="text-gray-80 font-normal text-lg">
                  {{ x?.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-gray-30 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black-DEFAULT text-xl">
              Recent Shares
            </div>
            <button class="text-gray-60 font-normal text-lg">
              <div class="flex space-s-2 items-center">
                <div
                  @click="router.push({ path: '/content-management/platform' })"
                >
                  View All
                </div>
                <ArrowRightIcon />
              </div>
            </button>
          </div>
          <div class="py-2 px-4" v-for="x in recentLikes" :key="x?.id">
            <div class="flex justify-between">
              <div class="flex space-s-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-black-DEFAULT font-normal text-lg">
                  {{ x?.name }}
                </div>
              </div>
              <div class="flex space-s-2 items-center">
                <div class="text-gray-80 font-normal text-lg">
                  {{ x?.date }}
                </div>
                <div><Ellipse class="" /></div>
                <div class="text-gray-80 font-normal text-lg">
                  {{ x?.time }}
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { ArrowRightIcon, Vector } from "../components/icons/AllIcons";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import CalendarDate from "../components/layouts/RightCoulumn/Calendar.vue";
import DownloadIcon from "../components/icons/Download.vue";
import { MenuItems } from "@headlessui/vue";
import Ellipse from "../components/icons/Ellipse.vue";
import EyeIcon from "../components/icons/eyeIcon.vue";
import LoveIcon from "../components/icons/LoveIcon.vue";
import ShareIcon from "../components/icons/ShareIcon.vue";
const open = ref(false);

const stats = ref([
  {
    id: 1,
    name: "Views",
    value: "150,397",
    icon: "EyeIcon.svg",
  },
  {
    id: 2,
    name: "Likes",
    value: "150,397",
    icon: "LoveIcon.svg",
  },
  {
    id: 3,
    name: "Shares",
    value: "150,397",
    icon: "ShareIcon.svg",
  },
  {
    id: 4,
    name: "Comments",
    value: "150,397",
    icon: "EyeIcon.svg",
  },
  {
    id: 5,
    name: "Time Spent (Minutes)",
    value: "150,397",
    icon: "EyeIcon.svg",
  },
]);

const platforms = reactive([
  {
    id: 1,
    name: "Whatsapp",
    value: 1567,
    icon: "Whatsapp.png",
  },
  {
    id: 2,
    name: "Telegram",
    value: 1567,
    icon: "Telegram.png",
  },
  {
    id: 3,
    name: "Instagram",
    value: 1567,
    icon: "Instagram.png",
  },
  {
    id: 4,
    name: "link copied",
    value: 1567,
    icon: "link.png",
  },
  {
    id: 5,
    name: "Twitter",
    value: 1567,
    icon: "Twitter.png",
  },
  {
    id: 6,
    name: "email",
    value: 1567,
    icon: "Mail.png",
  },
  {
    id: 7,
    name: "Whatsapp",
    value: 1567,
    icon: "Whatsapp.png",
  },
  {
    id: 8,
    name: "Facebook",
    value: 1567,
    icon: "Facebook.png",
  },
]);
const recentShares = reactive([
  {
    id: 1,
    name: "whatsapp",
    value: 1567,
    icon: "Whatsapp.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 2,
    name: "Telegram",
    value: 1567,
    icon: "Telegram.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 3,
    name: "Instagram",
    value: 1567,
    icon: "Instagram.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 4,
    name: "link copied",
    value: 1567,
    icon: "link.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 5,
    name: "Twitter",
    value: 1567,
    icon: "Twitter.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 6,
    name: "email",
    value: 1567,
    icon: "Mail.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 7,
    name: "Whatsapp",
    value: 1567,
    icon: "Whatsapp.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 8,
    name: "Facebook",
    value: 1567,
    icon: "Facebook.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
]);
const recentLikes = reactive([
  {
    id: 1,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 2,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 3,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 4,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 5,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 6,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 7,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
  {
    id: 8,
    name: "David Green",
    value: 1567,
    icon: "DG.png",
    date: "May 20,2023",
    time: "12:30 PM",
  },
]);
</script>
