<template>
  <div>
    <div class="flex justify-between px-6 pt-4">
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
    <div class="px-6 pt-6">
      <div class="flex pb-4 space-x-10">
        <div
          class="flex items-center space-x-2 cursor-pointer hover:underline hover:underline-blue"
          @click="currentContentTab = 'AllContent'"
        >
          <div class="text-gray-60">All Content</div>
          <div
            class="flex items-center justify-center w-5 h-5 text-center text-white rounded-sm bg-blue"
          >
            0
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
      <hr />
    </div>

    <div class="flex justify-between px-6 pt-6">
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
        <Dropdown />
      </div>
      <div class="flex items-center mt-2 space-x-4">
        <div class="text-gray-60">View</div>
        <div @click="currentTab = 'ListContentView'">
          <button>
            <ListIcon />
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
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import Search from "../components/icons/Search.vue";
import Filter from "../components/layouts/RightCoulumn/Filter.vue";
import ListIcon from "../components/icons/ListIcon.vue";
import GridIcon from "../components/icons/gridIcon.vue";
import GridContentView from "../components/GridContentView.vue";
import ListContentView from "../components/ListContentView.vue";
import { FilterIcon } from "../components/icons/AllIcons";
import PlusIcon from "../components/icons/PlusIcon.vue";
import AllContent from "../components/layouts/RightCoulumn/AllContent.vue";
import Archive from "../components/layouts/RightCoulumn/Archive.vue";
import Drafts from "../components/layouts/RightCoulumn/Drafts.vue";
import Publish from "../components/layouts/RightCoulumn/Publish.vue";
import CreateNewContent from "../components/Modals/CreateNewContent.vue";
import Dropdown from "../components/Dropdown.vue";
import Calendar from "../components/layouts/RightCoulumn/Calendar.vue";

const showModal = ref(false);

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
