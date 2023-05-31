<template>
  <div>
    <div class="flex justify-between px-9 pt-4">
      <h1 class="text-2xl font-bold capitalize text-black-DEFAULT">
        Content Manager
      </h1>
      <button class="w-36 h-12 text-white rounded-md bg-blue">
        <div class="flex justify-center space-s-2">
          <PlusIcon class="w-6 h-6" />
          <button @click="showModal = !showModal" class="text-base">
            Create New
          </button>
          <CreateNewContent v-if="showModal" />
        </div>
      </button>
    </div>
    <div class="px-9 pt-6">
      <!-- list view layout -->
      <div class="flex space-s-10" v-if="layout === 'list'">
        <div v-for="i in tabHeadings" :key="i.name" @click="changeTab(i.name)">
          <div
            class="flex items-center space-s-2 cursor-pointer"
            :class="[
              tabValue == i.name
                ? 'border-blue text-black text-base'
                : 'border-transparent text-gray-500 hover:border-blue hover:text-gray-60',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
            ]"
          >
            <div class="text-lg">{{ i.name }}</div>
            <div
              class="flex items-center justify-center text-center"
              :class="[
                tabValue == i.name
                  ? 'text-white rounded-sm bg-blue w-5 h-5'
                  : 'text-black rounded-sm bg-gray-30 w-5 h-5',
                ,
              ]"
            >
              {{ i.listLength }}
            </div>
          </div>
        </div>
      </div>

      <!-- grid view layout -->
      <div class="flex space-s-10" v-if="layout === 'grid'">
        <div v-for="i in tabHeadings" :key="i.id" @click="changeTab(i.name)">
          <div
            class="flex items-center space-s-2 cursor-pointer"
            :class="[
              tabValue == i.name
                ? 'border-blue text-black text-base'
                : 'border-transparent text-gray-500 hover:border-blue hover:text-gray-60',
              'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
            ]"
          >
            <div class="text-lg">{{ i.name }}</div>
            <div
              class="flex items-center justify-center text-center"
              :class="[
                tabValue == i.name
                  ? 'text-white rounded-sm bg-blue w-5 h-5'
                  : 'text-black rounded-sm bg-gray-30 w-5 h-5',
                ,
              ]"
            >
              {{ i.listLength }}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="flex justify-between px-9 pt-7">
      <div class="flex space-s-6">
        <div class="relative rounded-md">
          <div
            class="absolute start-0 flex items-center ps-3 pointer-events-none top-3"
          >
            <Search class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="block w-96 h-12 rounded-md border focus:outline-none py-1.5 ps-10 placeholder:text-gray-70 placeholder:font-medium border-gray-40"
            placeholder="Search"
          />
        </div>
        <Filter>
          <MenuItems
            class="absolute z-20 mt-4 w-82 rounded-md bg-white shadow-lg"
          >
            <div class="flex items-center justify-between pt-2 px-4">
              <div class="font-bold capitalize text-gray-80">
                Filter by date
              </div>
              <CloseIcon @click="open = false" class="cursor-pointer" />
            </div>
            <form action="" class="pb-4 ps-4 pe-4">
              <CalendarDate label="start date" class="py-6" />
              <CalendarDate label="end date" />
              <div class="flex justify-end pt-10 space-s-4">
                <div>
                  <button
                    class="h-8 capitalize border rounded-s-md rounded-e-md border-gray-40 text-gray-70"
                  >
                    <p class="px-2 text-base">cancel</p>
                  </button>
                </div>
                <div>
                  <button
                    class="h-8 text-white capitalize bg-blue rounded-s-md rounded-e-md"
                  >
                    <button class="px-3" @click="">Apply Filter</button>
                  </button>
                </div>
              </div>
            </form>
          </MenuItems>
        </Filter>

        <!-- Media type dropdown -->
        <Dropdown name="All">
          <template #icon>
            <ChevronDownIcon
              class="w-5 h-5 -me-1 text-gray-400"
              aria-hidden="true"
          /></template>
          <MediaDropdown />
        </Dropdown>
      </div>
      <div class="flex items-center mt-2 space-s-4">
        <div class="text-gray-60 font-medium text-lg">View</div>
        <div @click="layout = 'list'">
          <button v-if="layout === 'list'"><ListIcon /></button>
          <button v-else>
            <GrayListIcon />
          </button>
        </div>
        <div @click="layout = 'grid'">
          <button v-if="layout === 'grid'"><ColoredGridIcon /></button>
          <button v-else>
            <GridIcon />
          </button>
        </div>
      </div>
    </div>
    <!-- list view component -->
    <div class="" v-if="layout === 'list'">
      <div v-if="tabValue === 'All Content'">
        <AllContentListView />
      </div>
      <div v-else-if="tabValue === 'Publish'">
        <Publish />
      </div>
      <div v-else-if="tabValue === 'Drafts'">
        <Drafts />
      </div>
      <div v-else-if="tabValue === 'Archive'"><Archive /></div>
      <!-- grid view component -->
    </div>
    <div class="" v-if="layout === 'grid'">
      <div v-if="tabValue === 'All Content'">
        <GridContentView />
      </div>
      <div v-else-if="tabValue === 'Publish'">
        <GridPublish />
      </div>
      <div v-else-if="tabValue === 'Drafts'">
        <GridDrafts />
      </div>
      <div v-else-if="tabValue === 'Archive'">
        <GridArchive />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Search from "../components/icons/Search.vue";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import ListIcon from "../components/icons/ListIcon.vue";
import GridIcon from "../components/icons/gridIcon.vue";
import GridContentView from "../components/GridContentView.vue";
import PlusIcon from "../components/icons/PlusIcon.vue";
import AllContentListView from "../components/layouts/RightCoulumn/AllContentListView.vue";
import Archive from "../components/layouts/RightCoulumn/Archive.vue";
import Drafts from "../components/layouts/RightCoulumn/Drafts.vue";
import Publish from "../components/layouts/RightCoulumn/Publish.vue";
import CreateNewContent from "../components/Modals/CreateNewContent.vue";
import Dropdown from "../components/Dropdown.vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { MenuItems } from "@headlessui/vue";
import CloseIcon from "../components/icons/CloseIcon.vue";
import CalendarDate from "../components/layouts/RightCoulumn/Calendar.vue";
import MediaDropdown from "../components/layouts/Dropdown/MediaDropdown.vue";
import GridPublish from "../components/layouts/GridPublish.vue";
import GridDrafts from "../components/layouts/GridDraft.vue";
import GridArchive from "../components/layouts/GridArchive.vue";
import ColoredGridIcon from "../components/icons/ColoredGridIcon.vue";
import GrayListIcon from "../components/icons/GrayListIcon.vue";
const open = ref(false);

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
const tabValue = ref("All Content");
const tabHeadings = ref([
  {
    id: 1,
    name: "All Content",
    value: false,
    listLength: contentList.length,
  },
  {
    id: 2,
    name: "Publish",
    value: false,
    listLength: 0,
  },
  {
    id: 3,
    name: "Drafts",
    value: false,
    listLength: 0,
  },
  {
    id: 4,
    name: "Archive",
    value: false,
    listLength: 0,
  },
]);
const changeTab = (name: string) => {
  tabValue.value = name;
};
</script>
<style scoped></style>
