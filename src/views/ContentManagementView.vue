<template>
  <div>
    <div class="flex justify-between px-6 pt-4">
      <h1 class="capitalize text-black text-xl font-bold">Content Manager</h1>
      <button class="bg-blue text-white w-36 rounded-md h-12">
        <div class="flex justify-center space-x-2">
          <PlusIcon class="h-6 w-6" />
          <button @click="showModal = !showModal">Create New</button>
          <CreateNewContent v-if="showModal" />
        </div>
      </button>
    </div>
    <div class="pt-6 px-6">
      <div class="flex space-x-10 pb-4">
        <div
          class="flex cursor-pointer space-x-2 hover:underline hover:underline-blue items-center"
          @click="currentContentTab = 'AllContent'"
        >
          <div class="text-gray-60">All Content</div>
          <div
            class="w-5 h-5 bg-blue text-white rounded-sm text-center flex justify-center items-center"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center cursor-pointer space-x-2 hover:underline hover:underline-blue"
          @click="currentContentTab = 'Publish'"
        >
          <div class="text-gray-60">Publish</div>
          <div
            class="w-5 h-5 bg-blue text-white rounded-sm text-center flex justify-center items-center"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center cursor-pointer space-x-2 hover:underline hover:underline-blue"
          @click="currentContentTab = 'Drafts'"
        >
          <div class="text-gray-60">Drafts</div>
          <div
            class="w-5 h-5 bg-blue text-white rounded-sm text-center flex justify-center items-center"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center cursor-pointer space-x-2 hover:underline hover:underline-blue"
          @click="currentContentTab = 'Archive'"
        >
          <div class="text-gray-60">Archive</div>
          <div
            class="w-5 h-5 bg-blue text-white rounded-sm text-center flex justify-center items-center"
          >
            0
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="flex justify-between px-6 pt-6">
      <div class="flex space-x-6">
        <div class="relative mt-2 rounded-md">
          <div
            class="pointer-events-none absolute top-3 left-0 flex items-center pl-3"
          >
            <Search class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="block w-96 h-12 rounded-md border focus:outline-none py-1.5 pl-10 placeholder:text-gray-70 border-gray-30"
            placeholder="Search"
          />
        </div>
        <Filter><FilterIcon /></Filter>
        <!-- Media type dropdown -->
        <Menu as="div" class="relative inline-block text-left mt-2">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3.5 text-sm text-gray-70 shadow-sm ring-1 ring-inset ring-gray-40"
              >Media type : All
              <ChevronDownIcon
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
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <small class="text-blue px-4" style=""
                  >Select content type</small
                >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    ><input type="checkbox" selected />
                    <label for="All" class="px-2 py-2">All</label></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    ><input type="checkbox" />
                    <label for="support" class="px-2 pb-2">Support</label></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    ><input type="checkbox" />
                    <label for="images" class="px-2 pb-2">Images</label></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    ><input type="checkbox" />
                    <label for="videos" class="px-2 pb-2">Videos</label></a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    ><input type="checkbox" />
                    <label for="text_only" class="px-2 pb-2"
                      >Text Only</label
                    ></a
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="flex space-x-4 mt-2 items-center">
        <div class="text-gray-60">View</div>
        <div @click="currentTab = 'ListContentView'">
          <button>
            <ListIcon />
            <!-- <ListIcongray v-else /> -->
          </button>
        </div>
        <div @click="currentTab = 'GridContentView'">
          <button>
            <GridIcon />
          </button>
        </div>
      </div>
    </div>
    <!-- <KeepAlive
      ><component
        :is="contents[currentContentTab as keyof typeof contents]"
      ></component
    ></KeepAlive> -->
    <keepAlive>
      <component :is="tabs[currentTab as keyof typeof tabs]"></component>
    </keepAlive>
    <!-- <AllContent /> -->
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Ellipse from "../components/icons/Ellipse.vue";
import MenuIcon from "../components/icons/MenuIcon.vue";
import LikesIcon from "../components/icons/LikesIcon.vue";
import LoveIcon from "../components/icons/LoveIcon.vue";
import Search from "../components/icons/Search.vue";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import ListIcon from "../components/icons/ListIcon.vue";
import GridIcon from "../components/icons/gridIcon.vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useRouter, useRoute, RouterLink } from "vue-router";
import GridContentView from "../components/GridContentView.vue";
import ListContentView from "../components/ListContentView.vue";
import ListIcongray from "../components/icons/ListIcongray.vue";
import { FilterIcon } from "../components/icons/AllIcons";
import PlusIcon from "../components/icons/PlusIcon.vue";
import AllContent from "../components/layouts/RightCoulumn/AllContent.vue";
import Archive from "../components/layouts/RightCoulumn/Archive.vue";
import Drafts from "../components/layouts/RightCoulumn/Drafts.vue";
import Publish from "../components/layouts/RightCoulumn/Publish.vue";
import CreateNewContent from "../components/Modals/CreateNewContent.vue";
const router = useRouter();
const route = useRoute();
const isActive = ref(false);
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
const showModal = ref(false);
const getContentList = () => {
  if (contentList.length > 0) {
    return contentList;
  } else if ((contentList.length = 0)) {
    return;
  }
};
const tabs = reactive({
  GridContentView,
  ListContentView,
});
const currentTab = ref("ListContentView");
const contents = reactive({
  AllContent,
  Archive,
  Drafts,
  Publish,
});
const currentContentTab = ref("AllContent");
</script>
