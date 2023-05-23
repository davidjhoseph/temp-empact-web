<template>
  <FullPrimarySidebar>
    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex justify-between h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-10"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex items-center space-x-2">
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
            <a href="" class="text-base text-gray-60">Content Manager</a>
          </div>
          <div class="h-5 w-5 flex justify-center items-center">
            <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
          </div>
          <div class="h-5">
            <a href="" class="text-base text-blue">Content</a>
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
      <main class="py-10 px-4">
        <div class="sm:px-6 lg:px-6">
          <!-- Your content -->
          <div class="flex justify-between">
            <div class="text-black text-xl font-bold">Content Statistics</div>
            <div class="flex space-x-4">
              <div>
                <Filter> <Calendar /> </Filter>
              </div>
              <button class="mt-2">
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
            <div class="flex justify-between">
              <div class="h-28 w-72 border-gray-50 border rounded-lg">
                <div class="my-7 px-3 flex flex-col">
                  <h3 class="text-blue text-lg">150,397</h3>
                  <div class="flex space-x-2 items-center">
                    <EyeIcon />
                    <p class="text-gray-60">View</p>
                  </div>
                </div>
              </div>
              <div class="h-28 w-72 border-gray-50 border rounded-lg">
                <div class="my-7 px-3 flex flex-col">
                  <h3 class="text-blue text-lg">150,397</h3>
                  <div class="flex space-x-2 items-center">
                    <EyeIcon />
                    <p class="text-gray-60">View</p>
                  </div>
                </div>
              </div>
              <div class="h-28 w-72 border-gray-50 border rounded-lg">
                <div class="my-7 px-3 flex flex-col">
                  <h3 class="text-blue text-lg">150,397</h3>
                  <div class="flex space-x-2 items-center">
                    <EyeIcon />
                    <p class="text-gray-60">View</p>
                  </div>
                </div>
              </div>
              <div class="h-28 w-72 border-gray-50 border rounded-lg">
                <div class="my-7 px-3 flex flex-col">
                  <h3 class="text-blue text-lg">150,397</h3>
                  <div class="flex space-x-2 items-center">
                    <EyeIcon />
                    <p class="text-gray-60">View</p>
                  </div>
                </div>
              </div>
              <div class="h-28 w-72 border-gray-50 border rounded-lg">
                <div class="my-7 px-3 flex flex-col">
                  <h3 class="text-blue text-lg">150,397</h3>
                  <div class="flex space-x-2 items-center">
                    <EyeIcon />
                    <p class="text-gray-60">View</p>
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
                    <img
                      :src="`/src/assets/images/${x?.icon}`"
                      alt=""
                      class=""
                    />
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
                      @click="
                        router.push({ path: '/content-management/platform' })
                      "
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
                    <img
                      :src="`/src/assets/images/${x?.icon}`"
                      alt=""
                      class=""
                    />
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
                      @click="
                        router.push({ path: '/content-management/platform' })
                      "
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
                    <img
                      :src="`/src/assets/images/${x?.icon}`"
                      alt=""
                      class=""
                    />
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
    </div>
  </FullPrimarySidebar>
</template>
<script setup lang="ts">
import FullPrimarySidebar from "../components/layouts/nav/sidebar/FullPrimarySidebar.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import {
  ArrowRightIcon,
  CalendarIcon,
  Vector,
} from "../components/icons/AllIcons";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import Calendar from "../components/icons/calendar.vue";
import DownloadIcon from "../components/icons/Download.vue";
import EyeIcon from "../components/icons/eyeIcon.vue";
import AdvancedStatisticsBox from "../components/layouts/RightCoulumn/AdvancedStatisticsBox.vue";
import Ellipse from "../components/icons/Ellipse.vue";
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const sidebarOpen = ref(false);
const platforms = reactive([
  {
    id: 1,
    name: "whatsapp",
    value: 1567,
    icon: "vector (5).png",
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
    icon: "Vector (6).png",
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
    icon: "Vector (5).png",
  },
  {
    id: 8,
    name: "Facebook",
    value: 1567,
    icon: "Facebook.png",
  },
]);
// const recentLikes = reactive([
//   {
//     id: 1,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 2,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 3,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   ,
//   {
//     id: 4,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 5,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 6,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 7,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
//   {
//     id: 8,
//     name: "David Green",
//     icon: "DG.png",
//     date: "Mar 20, 2023",
//     time: "12:30 PM",
//   },
// ]);
const recentShares = reactive([
  {
    id: 1,
    name: "whatsapp",
    value: 1567,
    icon: "Vector (5).png",
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
    icon: "Vector (6).png",
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
    icon: "Vector (5).png",
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
