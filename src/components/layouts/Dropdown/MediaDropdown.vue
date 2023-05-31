<template>
  <form action="">
    <div
      class="flex items-center space-s-2 h-12 w-max border border-gray-30 rounded-md bg-white px-2"
    >
      <p>Media Type :</p>

      <select
        name=""
        id=""
        class="focus:ring-0 focus-within:outline-none bg-transparent"
      >
        <option value="" v-for="i in dropdowns" :key="i.id">
          {{ i.name }}
        </option>
      </select>
    </div>
  </form>
  <!-- <div class="py-1">
    <small class="px-4 text-blue" style="">Select content type</small>
    <form action="" class="px-4 pb-2">
      <div class="pt-4">
        <input type="checkbox" selected />
        <label for="All" class="px-2 py-2">All</label>
      </div>
      <div class="pt-4">
        <input type="checkbox" />
        <label for="support" class="px-2 pb-2">Support</label>
      </div>
      <div class="pt-4">
        <input type="checkbox" />
        <label for="images" class="px-2 pb-2">Images</label>
      </div>
      <div class="pt-4">
        <input type="checkbox" />
        <label for="videos" class="px-2 pb-2">Videos</label>
      </div>
      <div class="pt-4">
        <input type="checkbox" />
        <label for="text_only" class="px-2 pb-2">Text Only</label>
      </div>
    </form>
  </div> -->
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  name: String,
});
const dropdowns = ref([
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Support",
  },
  {
    id: 3,
    name: "Images",
  },
  {
    id: 4,
    name: "Videos",
  },
  {
    id: 5,
    name: "Text Only",
  },
]);
</script>
