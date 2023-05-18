<template>
  <div
    class="border border-gray-30 rounded-md px-6 py-10 h-96 w-full overflow-y-auto"
  >
    <div>
      <div v-if="getContentList()" class="h-96">
        <div class="" v-for="list in contentList" :key="list.id">
          <div class="flex justify-between border rounded-md space-y-6 px-2">
            <!-- left column -->
            <div class="flex space-x-4 py-4">
              <input type="checkbox" name="" id="" class="-mt-16" />
              <div>
                <img
                  :src="`/public/images/${list.image}`"
                  alt="content image"
                />
              </div>
              <div class="flex flex-col">
                <p class="text-black text-left">{{ list.title }}</p>

                <p class="text-gray-60 text-left">
                  <small>{{ list.desc }}</small>
                </p>
                <div class="flex space-x-2 mt-6 items-center">
                  <div class="text-sm text-gray-60 text-left">
                    <small>{{ list.date }}</small>
                  </div>
                  <div class="text-sm text-gray-60 text-left"><Ellipse /></div>
                  <div class="text-sm text-gray-60 text-left">
                    <small>{{ list.time }}</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- right column -->
            <div class="flex flex-col space-y-12">
              <div class="flex space-x-4 justify-end">
                <button
                  class="text-gray-70 h-6 w-10 text-sm border-gray-40 rounded-sm border px-1"
                >
                  view
                </button>
                <button
                  class="text-gray-70 h-6 w-7 px-2 border-gray-40 rounded-sm border text-center"
                >
                  <MenuIcon />
                </button>
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
        </div>
      </div>
      <div class="flex justify-center items-center h-96" v-else>
        <div class="items-center">
          <p class="text-base text-black text-center">No Content Yet</p>
          <br />
          <p class="text-gray-60 text-center">
            <small>You haven’t created any content yet</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Ellipse from "../../icons/Ellipse.vue";
import MenuIcon from "../../icons/menuIcon.vue";
import LikesIcon from "../../icons/LikesIcon.vue";
import LoveIcon from "../../icons/LoveIcon.vue";
import ContentHeading from "../../ContentHeading.vue";
// interface ContentLists {
//   id: number;
//   title: string;
//   desc: string;
//   date: string;
//   time: string;
//   image: string;
//   likes: number;
//   favourite: number;
//   view: boolean;
// }
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
