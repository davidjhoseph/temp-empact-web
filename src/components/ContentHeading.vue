<template>
  <div class="mt-10 mb-4 flex space-x-10">
    <div v-for="content in contents" :key="content.id">
      <div class="flex space-x-2">
        <button
          class="text-gray-60 capitalize text-base hover:underline hover:underline-offset-8 hover:underline-blue"
          :class="props.isActive ? 'text-white bg-blue-60' : 'text-gray-40'"
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
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import AllContent from "./layouts/RightCoulumn/AllContent.vue";
import Publish from "./layouts/RightCoulumn/Publish.vue";
import Drafts from "./layouts/RightCoulumn/Drafts.vue";
import Archive from "./layouts/RightCoulumn/Archive.vue";

interface Contents {
  id: number;
  name: string;
  count: number;
  component: string;
}
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  length: {
    type: Number,
  },
});
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
