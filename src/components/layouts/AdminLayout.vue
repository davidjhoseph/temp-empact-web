<template>
  <div class="md:flex h-screen w-screen">
    <div class="h-full">
      <AdminSidebar />
    </div>
    <main class="flex-1 bg-gray-10">
      <NavHeader />
      <div class="mx-6">
        <div class="mt-10 flex items-center justify-between">
          <BreadCrumb />
          <div class="flex items-center space-x-4">
            <BaseButton class="flex items-center space-x-2">
              <PlusIcon class="w-5 h-5" />
              <div>Create New</div>
            </BaseButton>
            <!-- <OutlineButton class="flex items-center space-x-2" color="gray">
            <DownloadIcon class="w-5 h-5" />
            <div>Import</div>
          </OutlineButton> -->
          </div>
        </div>
        <div class="mt-10 mb-4 flex space-x-10">
          <div v-for="content in contents" :key="content.id">
            <div class="flex space-x-2">
              <button
                class="text-gray-60 capitalize text-base hover:underline hover:underline-offset-8 hover:underline-blue"
                :class="
                  props.isActive ? 'text-white bg-blue-60' : 'text-gray-40'
                "
                @click="currentTab = content.component"
              >
                {{ content.name }}
              </button>
              <div
                class="bg-blue text-white h-5 w-5 rounded-sm flex justify-center items-center"
              >
                {{ content.count }}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="border border-gray-30 h-96 w-full rounded-md">
          <keepAlive>
            <component :is="tabs[currentTab as keyof typeof tabs]"></component>
          </keepAlive>
          <!-- <RouterView
            v-slot="{ Component }"
            class="rounded-md h-96 border border-gray-30 py-10"
          >
            <transition name="fastfade" mode="out-in">
              <component :is="currentTab" />
            </transition>
          </RouterView> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AdminSidebar from "./AdminSidebar.vue";
import { PlusIcon, DownloadIcon } from "../icons/AllIcons";
import BreadCrumb from "../common/BreadCrumb.vue";
import BaseButton from "../common/BaseButton.vue";
import OutlineButton from "../common/OutlineButton.vue";
import NavHeader from "../layouts/nav/header/NavHeader.vue";
import AllContent from "../layouts/RightCoulumn/AllContent.vue";
import Publish from "../layouts/RightCoulumn/Publish.vue";
import Drafts from "../layouts/RightCoulumn/Drafts.vue";
import Archive from "../layouts/RightCoulumn/Archive.vue";
import { ref, reactive } from "vue";
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
interface Contents {
  id: number;
  name: string;
  count: number;
  component: string;
}
const contents: Contents[] = reactive([
  {
    id: 1,
    name: "all contents",
    count: 0,
    component: "AllContent",
  },
  {
    id: 2,
    name: "publish",
    count: 0,
    component: "Publish",
  },
  {
    id: 3,
    name: "drafts",
    count: 0,
    component: "Drafts",
  },
  {
    id: 4,
    name: "archive",
    count: 0,
    component: "Archive",
  },
]);
const tabs = reactive({
  AllContent,
  Publish,
  Drafts,
  Archive,
});
const currentTab = ref("AllContent");
</script>
