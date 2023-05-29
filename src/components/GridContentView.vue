<template>
  <div class="grid grid-cols-4 gap-x-14 gap-y-6 pe-9 ps-9">
    <div class="py-4" v-for="list in contentList" :key="list.id">
      <div
        class="grid gap-y-2 py-4 pe-4 ps-4 border rounded-s-md rounded-e-md border-gray-30"
      >
        <div class="relative w-full h-40">
          <img
            class="w-full h-full object-cover"
            :src="`https://picsum.photos/200/300`"
            alt="content image"
          />
          <div class="absolute top-2 end-2" v-if="list.imageText == 'Image'">
            <button class="h-6 w-12">
              <p
                class="text-center text-sm pe-2 ps-2 flex justify-center items-center bg-green-10 text-green rounded-md"
              >
                {{ list.imageText }}
              </p>
            </button>
          </div>
          <div class="absolute top-2 end-2" v-if="list.imageText == 'Video'">
            <button class="h-6 w-12">
              <p
                class="text-center text-sm pe-2 ps-2 flex justify-center items-center bg-red-10 text-red rounded-md"
              >
                {{ list.imageText }}
              </p>
            </button>
          </div>

          <div class="absolute top-2 end-2" v-if="list.imageText == 'Text'">
            <button class="h-6 w-12 rounded-md">
              <p
                class="text-center text-sm pe-2 ps-2 flex justify-center items-center bg-orange-20 text-orange-60 rounded-md"
              >
                {{ list.imageText }}
              </p>
            </button>
          </div>
        </div>

        <div class="flex flex-col">
          <p class="text-black text-start">{{ list.title }}</p>

          <p class="text-gray-60 text-start">
            <small>{{ list.desc }}</small>
          </p>
        </div>
        <div class="flex flex-col space-y-12">
          <div class="flex space-s-10 pt-2">
            <div class="">
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
            <div class="text-sm text-gray-60 text-start">
              <small>{{ list.date }}</small>
            </div>
            <div class="text-sm text-gray-60 text-start"><Ellipse /></div>
            <div class="text-sm text-gray-60 text-start">
              <small>{{ list.time }}</small>
            </div>
          </div>
          <div class="flex space-s-4 mt-5">
            <button
              class="text-gray-70 h-6 w-10 text-sm border-gray-40 rounded-s-sm rounded-e-sm border ps-1 pe-1"
              @click="
                router.push({
                  name: ROUTES.CONTENT_VIEW,
                  params: { id: list.id },
                })
              "
            >
              view
            </button>
            <Menu as="div" class="relative inline-block h-6 text-start">
              <div>
                <MenuButton
                  class="w-8 h-6 ps-1 text-sm text-center border rounded-s-sm rounded-e-sm text-gray-70 border-gray-40"
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
                  class="absolute end-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-s-md rounded-e-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
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
    imageText: "Video",
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
    imageText: "Text",
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
    imageText: "Text",
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
    imageText: "Video",
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
    imageText: "Text",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
]);
</script>
