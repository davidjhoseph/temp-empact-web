<template>
  <div>
    <div class="flex justify-between px-9 pt-4">
      <h1 class="text-xl font-bold capitalize text-black-DEFAULT">
        Content Manager
      </h1>
      <button class="w-32 h-10 text-white rounded-md bg-blue">
        <div class="flex justify-center space-x-2">
          <PlusIcon class="w-6 h-6" />
          <button @click="showModal = !showModal">Create New</button>
          <CreateNewContent v-if="showModal" />
        </div>
      </button>
    </div>
    <div class="px-9 pt-6">
      <!-- list view layout -->
      <div class="flex pb-4 space-x-10" v-if="layout === 'list'">
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentContentTab = 'AllContentListView'"
        >
          <div class="text-gray-60">All Content</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            {{ contentList.length }}
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentContentTab = 'Publish'"
        >
          <div class="text-gray-60">Publish</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentContentTab = 'Drafts'"
        >
          <div class="text-gray-60">Drafts</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentContentTab = 'Archive'"
        >
          <div class="text-gray-60">Archive</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
      </div>
      <!-- grid view layout -->
      <div class="flex pb-4 space-x-10" v-if="layout === 'grid'">
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentTab = 'GridListView'"
        >
          <div class="text-gray-60">All Content</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            {{ contentList.length }}
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentTab = 'GridPublish'"
        >
          <div class="text-gray-60">Publish</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentTab = 'GridDrafts'"
        >
          <div class="text-gray-60">Drafts</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentTab = 'GridArchive'"
        >
          <div class="text-gray-60">Archive</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="flex justify-between px-9 pt-6">
      <div class="flex space-x-6">
        <div class="relative rounded-md">
          <div
            class="absolute left-0 flex items-center pl-3 pointer-events-none top-3"
          >
            <Search class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="block w-96 h-12 rounded-md border focus:outline-none py-1.5 pl-10 placeholder:text-gray-70 border-gray-40"
            placeholder="Search"
          />
        </div>
        <Filter><FilterIcon /></Filter>

        <!-- Media type dropdown -->
        <Dropdown name="Media type : All">
          <template #icon>
            <ChevronDownIcon
              class="w-5 h-5 -mr-1 text-gray-400"
              aria-hidden="true"
          /></template>
          <MediaDropdown />
        </Dropdown>
      </div>
      <div class="flex items-center mt-2 space-x-4">
        <div class="text-gray-60">View</div>
        <div @click="layout = 'list'">
          <button>
            <ListIcon />
          </button>
        </div>
        <div @click="layout = 'grid'">
          <button>
            <GridIcon />
          </button>
        </div>
      </div>
    </div>
    <component
      v-if="layout === 'list'"
      :is="contents[currentContentTab as keyof typeof contents]"
    ></component>
    <component
      v-if="layout === 'grid'"
      :is="tabs[currentTab as keyof typeof tabs]"
    ></component>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Search from "../components/icons/Search.vue";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import ListIcon from "../components/icons/ListIcon.vue";
import GridIcon from "../components/icons/gridIcon.vue";
import GridContentView from "../components/GridContentView.vue";
import { FilterIcon } from "../components/icons/AllIcons";
import PlusIcon from "../components/icons/PlusIcon.vue";
import AllContentListView from "../components/layouts/RightCoulumn/AllContentListView.vue";
import Archive from "../components/layouts/RightCoulumn/Archive.vue";
import Drafts from "../components/layouts/RightCoulumn/Drafts.vue";
import Publish from "../components/layouts/RightCoulumn/Publish.vue";
import CreateNewContent from "../components/Modals/CreateNewContent.vue";
import Dropdown from "../components/Dropdown.vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import MediaDropdown from "../components/layouts/Dropdown/MediaDropdown.vue";
import GridPublish from "../components/layouts/GridPublish.vue";
import GridDrafts from "../components/layouts/GridDraft.vue";
import GridArchive from "../components/layouts/GridArchive.vue";
const layout = ref("list");

const showModal = ref(false);
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
const tabs = ref({
  GridContentView,
  GridPublish,
  GridDrafts,
  GridArchive,
});
const currentTab = ref("GridContentView");
const contents = reactive({
  AllContentListView,
  Archive,
  Drafts,
  Publish,
});
const currentContentTab = ref("AllContentListView");
</script>
