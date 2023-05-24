<template>
  <main class="py-6 px-6">
    <div class="sm:px-9 lg:px-4">
      <!-- Your content -->
      <div class="flex justify-between pb-2 -mt-4 items-center">
        <div class="text-black text-xl font-bold">Content Statistics</div>
        <div class="flex space-x-4">
          <div>
            <Filter class=""><Calendar /></Filter>
          </div>
          <button class="">
            <div
              class="flex justify-center items-center space-x-2 h-12 w-40 rounded-md border border-gray-40"
            >
              <div><DownloadIcon /></div>
              <div class="text-gray-70 text-sm">Download Report</div>
            </div>
          </button>
        </div>
      </div>
      <div class="my-10">
        <div class="flex justify-between space-x-2">
          <div v-for="i in stats" :key="i.id">
            <div class="h-28 w-72 border-gray-50 border rounded-lg">
              <div class="my-7 px-3 flex flex-col">
                <h3 class="text-blue text-lg">{{ i.value }}</h3>
                <div class="flex space-x-2 items-center">
                  <div><img :src="`/images/${i.icon}`" alt="" /></div>
                  <p class="text-gray-60">{{ i.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="border border-gray-70 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black">Platform Shares</div>
          </div>
          <div class="py-2 px-4" v-for="x in platforms" :key="x?.id">
            <div class="flex justify-between">
              <div class="flex space-x-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-gray-80">{{ x?.name }}</div>
              </div>
              <div class="text-gray-80">{{ x?.value }}</div>
            </div>
          </div>
        </div>
        <div class="border border-gray-70 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black">Recent Shares</div>
            <button class="text-gray-60">
              <div class="flex space-x-2 items-center">
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
              <div class="flex space-x-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-gray-80">{{ x?.name }}</div>
              </div>
              <div class="flex space-x-2 items-center">
                <div class="text-gray-80">{{ x?.date }}</div>
                <div><Ellipse /></div>
                <div class="text-gray-80">{{ x?.time }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-gray-70 rounded-md">
          <div class="flex justify-between p-4">
            <div class="font-bold text-black">Recent Shares</div>
            <button class="text-gray-60">
              <div class="flex space-x-2 items-center">
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
              <div class="flex space-x-2 items-center">
                <img :src="`/images/${x?.icon}`" alt="" class="" />
                <div class="text-gray-80">{{ x?.name }}</div>
              </div>
              <div class="flex space-x-2 items-center">
                <div class="text-gray-80">{{ x?.date }}</div>
                <div><Ellipse /></div>
                <div class="text-gray-80">{{ x?.time }}</div>
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
import Calendar from "../components/icons/calendar.vue";
import DownloadIcon from "../components/icons/Download.vue";
import EyeIcon from "../components/icons/eyeIcon.vue";
import Ellipse from "../components/icons/Ellipse.vue";
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
