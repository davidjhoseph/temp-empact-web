<template>
  <div class="grid grid-cols-4 gap-x-14 gap-y-6">
    <div class="py-4" v-for="list in contentList" :key="list.id">
      <!-- left column -->
      <div class="grid gap-y-2 p-4 border rounded-md">
        <!-- <input type="checkbox" name="" id="" class="-mt-16" /> -->
        <div class="">
          <img
            :src="`/images/${list.image}`"
            alt="content image"
            class="relative w-full"
          />
        </div>
        <div class="flex flex-col">
          <p class="text-black text-left">{{ list.title }}</p>

          <p class="text-gray-60 text-left">
            <small>{{ list.desc }}</small>
          </p>
        </div>
        <div class="flex flex-col space-y-12">
          <div class="absolute top-4 right-2">
            <button class="bg-green-10 text-green-70 h-5 w-12 rounded-sm">
              <p class="text-center text-sm px-2">{{ list.imageText }}</p>
            </button>
          </div>
          <div class="flex space-x-10">
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
        <div class="flex justify-between items-center">
          <div class="flex space-x-2 mt-6 items-center">
            <div class="text-sm text-gray-60 text-left">
              <small>{{ list.date }}</small>
            </div>
            <div class="text-sm text-gray-60 text-left"><Ellipse /></div>
            <div class="text-sm text-gray-60 text-left">
              <small>{{ list.time }}</small>
            </div>
          </div>
          <div class="flex space-x-4 mt-5">
            <button
              class="text-gray-70 h-6 w-10 text-sm border-gray-40 rounded-sm border px-1"
              @click=""
            >
              view
            </button>
            <button
              class="text-gray-70 h-6 w-7 px-2 border-gray-40 rounded-sm border text-center"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import MenuIcon from "./icons/MenuIcon.vue";
import LikesIcon from "./icons/LikesIcon.vue";
import LoveIcon from "./icons/LoveIcon.vue";
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
