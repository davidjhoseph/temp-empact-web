<template>
  <div class="ps-9 pe-9 py-10 w-full overflow-y-auto">
    <div v-if="getContentList()">
      <div class="py-4" v-for="list in contentList" :key="list.id">
        <div
          class="flex justify-between ps-2 pe-2 space-y-6 border rounded-s-md rounded-e-md border-gray-30"
        >
          <div class="flex py-4 space-s-4">
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
              <div class="flex justify-between">
                <div class="flex items-center mt-16 space-s-2">
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
            <div class="flex justify-end space-s-4">
              <button
                @click="
                  router.push({
                    name: ROUTES.CONTENT_VIEW,
                    params: { id: list.id },
                  })
                "
                class="w-10 h-6 ps-1 pe-1 text-sm border rounded-s-sm rounded-e-sm text-gray-70 border-gray-40"
              >
                view
              </button>
              <Menu as="div" class="relative inline-block h-6 text-left">
                <div>
                  <MenuButton
                    class="w-8 h-6 ps-1 text-sm text-center border rounded-s-sm rounded-e-sm text-gray-70 border-gray-30"
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
                    class="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-s-md rounded-e-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div><MenuDropdownView /></div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <div class="flex space-s-10 pt-7">
              <div>
                <button
                  class="w-12 h-6 rounded-s-md rounded-e-md bg-green-10 text-green-70"
                >
                  <p
                    class="ps-2 pe-2 text-sm text-center flex justify-center items-center"
                    :class="{}"
                  >
                    {{ list.imageText }}
                  </p>
                </button>
              </div>
              <div>
                <div class="flex items-center space-s-2">
                  <LikesIcon />
                  <div class="text-gray-60">{{ list.likes }}</div>
                </div>
              </div>
              <div>
                <div class="flex items-center space-s-2">
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
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import { ROUTES } from "../../../router/routes";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import MenuIcon from "../../icons/MenuIcon.vue";
import MenuDropdownView from "../../layouts/Dropdown/MenuDropdownView.vue";
import LoveIcon from "../../icons/LoveIcon.vue";
import LikesIcon from "../../icons/LikesIcon.vue";

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
<style>
.active {
  color: #2c79ec !important;
}
</style>
