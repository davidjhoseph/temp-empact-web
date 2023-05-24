<template>
  <div class="px-9">
    <div class="py-4" v-for="list in contentList" :key="list.id">
      <div
        class="flex justify-between px-2 space-y-6 border rounded-md border-gray-30"
      >
        <div class="flex py-4 space-x-4">
          <input type="checkbox" name="" id="" class="-mt-28" />
          <div class="relative w-32 h-32">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              :src="`https://picsum.photos/200/300`"
              alt="content image"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-left text-black">{{ list.title }}</p>

            <p class="text-left text-gray-60">
              <small>{{ list.desc }}</small>
            </p>
            <div class="justify-between">
              <div class="flex items-center mt-16 space-x-2">
                <div class="text-sm text-left text-gray-60">
                  <small>{{ list.date }}</small>
                </div>
                <div class="text-sm text-left text-gray-60">
                  <Ellipse />
                </div>
                <div class="text-sm text-left text-gray-60">
                  <small>{{ list.time }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col space-y-12">
          <div class="flex justify-end space-x-4">
            <button
              @click="
                router.push({
                  name: ROUTES.CONTENT_VIEW,
                  params: { id: list.id },
                })
              "
              class="w-10 h-6 px-1 text-sm border rounded-sm text-gray-70 border-gray-40"
            >
              view
            </button>
            <Menu as="div" class="relative inline-block h-6 text-left">
              <div>
                <MenuButton
                  class="w-8 h-6 pl-1 text-sm text-center border rounded-sm text-gray-70 border-gray-30"
                >
                  <MenuIcon
                    class="w-5 h-5 -mr-1 text-gray-400"
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
                  <div class="py-1">
                    <small class="ml-4 text-blue" style=""
                      >Select content type</small
                    >
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Account settings</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >License</a
                      >
                    </MenuItem>
                    <form method="POST" action="#">
                      <MenuItem v-slot="{ active }">
                        <button
                          type="submit"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm',
                          ]"
                        >
                          Sign out
                        </button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="flex space-x-10">
            <div>
              <button class="w-12 h-5 rounded-sm bg-green-10 text-green-70">
                <p class="px-2 text-sm text-center">
                  {{ list.imageText }}
                </p>
              </button>
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <LikesIcon />
                <div class="text-gray-60">{{ list.likes }}</div>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <LoveIcon />
                <div class="text-gray-60">{{ list.favourite }}</div>
              </div>
            </div>
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import { useRouter, useRoute, RouterLink } from "vue-router";
import { ROUTES } from "../router/routes";

const router = useRouter();
const route = useRoute();
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
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
    ststistics: [],
  },
]);
</script>
