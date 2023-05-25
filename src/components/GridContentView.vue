<template>
  <div class="grid grid-cols-4 gap-x-14 gap-y-6 px-9">
    <!-- <AllContent v-if="AllContent" />
    <Publish v-else-if="Publish" />
    <Drafts v-else-if="Drafts" />
    <Archive v-else-if="Archive" /> -->
    <div class="py-4" v-for="list in contentList" :key="list.id">
      <div class="grid gap-y-2 p-4 border rounded-md border-gray-30">
        <div class="w-full h-40 relative">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            :src="`https://picsum.photos/200/300`"
            alt="content image"
          />
        </div>
        <div class="flex flex-col">
          <p class="text-black text-left">{{ list.title }}</p>

          <p class="text-gray-60 text-left">
            <small>{{ list.desc }}</small>
          </p>
        </div>
        <div class="flex flex-col space-y-12">
          <div class="absolute bottom-56 right-16">
            <button class="bg-green-10 text-green-70 h-5 w-12 rounded-sm">
              <p class="text-center text-sm px-2 text-red">
                {{ list.imageText }}
              </p>
            </button>
          </div>
          <div class="flex space-s-10">
            <div>
              <div class="flex space-s-2 items-center">
                <LikesIcon />
                <div class="text-gray-60">{{ list.likes }}</div>
              </div>
            </div>
            <div>
              <div class="flex space-s-2 items-center">
                <LoveIcon />
                <div class="text-gray-60">{{ list.favourite }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex space-s-2 mt-6 items-center">
            <div class="text-sm text-gray-60 text-left">
              <small>{{ list.date }}</small>
            </div>
            <div class="text-sm text-gray-60 text-left"><Ellipse /></div>
            <div class="text-sm text-gray-60 text-left">
              <small>{{ list.time }}</small>
            </div>
          </div>
          <div class="flex space-s-4 mt-5">
            <button
              class="text-gray-70 h-6 w-10 text-sm border-gray-40 rounded-sm border px-1"
              @click="
                router.push({
                  name: ROUTES.CONTENT_VIEW,
                  params: { id: list.id },
                })
              "
            >
              view
            </button>
            <Menu as="div" class="relative inline-block h-6 text-left">
              <div>
                <MenuButton
                  class="w-8 h-6 ps-1 text-sm text-center border rounded-sm text-gray-70 border-gray-40"
                >
                  <MenuIcon
                    class="w-5 h-5 -me-1 text-gray-400"
                    aria-hidden="true"
                  />
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
                  class="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div><MenuDropdownView /></div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";
import LikesIcon from "./icons/LikesIcon.vue";
import LoveIcon from "./icons/LoveIcon.vue";
// import AllContent from "./layouts/RightCoulumn/AllContent.vue";
import Publish from "./layouts/RightCoulumn/Publish.vue";
import Drafts from "./layouts/RightCoulumn/Drafts.vue";
import Archive from "./layouts/RightCoulumn/Archive.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import MenuDropdownView from "./layouts/Dropdown/MenuDropdownView.vue";

import { useRouter } from "vue-router";
import { ROUTES } from "../router/routes";
const router = useRouter();
const contentList = ref([
  {
    id: 1,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 2,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 3,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 4,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 5,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 6,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 7,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 8,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 9,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 10,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 11,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
]);
</script>
