<template>
  <div class="py-4" v-for="list in contentList" :key="list.id">
    <div class="flex justify-between border rounded-md space-y-6 px-2">
      <!-- left column -->
      <div class="flex space-x-4 py-4">
        <input type="checkbox" name="" id="" class="-mt-16" />
        <div>
          <img :src="`/public/images/${list.image}`" alt="content image" />
        </div>
        <div class="flex flex-col">
          <p class="text-black text-left">{{ list.title }}</p>

          <p class="text-gray-60 text-left">
            <small>{{ list.desc }}</small>
          </p>
          <div class="justify-between">
            <div class="flex space-x-2 mt-6 items-center">
              <div class="text-sm text-gray-60 text-left">
                <small>{{ list.date }}</small>
              </div>
              <div class="text-sm text-gray-60 text-left">
                <Ellipse />
              </div>
              <div class="text-sm text-gray-60 text-left">
                <small>{{ list.time }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- right column -->
      <div class="flex flex-col space-y-12">
        <div class="flex space-x-4 justify-end">
          <button
            @click="router.push({ path: `/content-management/${list.id}` })"
            class="text-gray-70 h-6 w-10 text-sm border-gray-40 rounded-sm border px-1"
          >
            view
          </button>
          <!-- view dropdown -->
          <Menu as="div" class="relative inline-block text-left h-6">
            <div>
              <MenuButton
                class="text-gray-70 h-6 w-8 text-sm border-gray-40 rounded-sm border text-center pl-1"
              >
                <MenuIcon
                  class="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <small class="text-blue ml-4" style=""
                    >Select content type</small
                  >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Account settings</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
            <button class="bg-green-10 text-green-70 h-5 w-12 rounded-sm">
              <p class="text-center text-sm px-2">{{ list.imageText }}</p>
            </button>
          </div>
          <div>
            <div class="flex space-x-2 items-center">
              <LikesIcon />
              <div class="text-gray-60">{{ list.likes }}</div>
            </div>
          </div>
          <div>
            <div class="flex space-x-2 items-center">
              <LoveIcon />
              <div class="text-gray-60">{{ list.favourite }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <GridContentView /> -->
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";
import LikesIcon from "./icons/LikesIcon.vue";
import LoveIcon from "./icons/LoveIcon.vue";
import { useRouter, useRoute, RouterLink } from "vue-router";

const router = useRouter();
const route = useRoute();
const contentList = reactive([
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
const getContentList = () => {
  if (contentList.length > 0) {
    return contentList;
  } else if ((contentList.length = 0)) {
    return;
  }
};
</script>
