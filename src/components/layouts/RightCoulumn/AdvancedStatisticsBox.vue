<template>
  <div class="border border-gray-70 rounded-md">
    <div class="flex justify-between p-4">
      <div class="">{{ props.title }}</div>
      <div><slot name="viewAll"></slot></div>
    </div>
    <div class="py-2 px-4" v-for="i in platforms" :key="i.id">
      <div class="flex justify-between">
        <div class="flex space-x-2 items-center">
          <div>
            <img src="../../icons/vector (5).png" alt="" class="h-4 w-4" />
          </div>
          <div>{{ i.name }}</div>
        </div>

        <div>{{ i.value }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import EyeIcon from "../../icons/eyeIcon.vue";
const props = defineProps({
  title: String,
  value: Number,
  name: String,
  icon: String,
});
const platforms = reactive([
  {
    id: 1,
    name: "whatsapp",
    value: 1567,
    icon: "Vector (6).png",
  },
  {
    id: 2,
    name: "whatsapp",
    value: 1567,
    icon: "Vector (5).png",
  },
  {
    id: 3,
    name: "whatsapp",
    value: 1567,
  },
  {
    id: 4,
    name: "whatsapp",
    value: 1567,
  },
  {
    id: 5,
    name: "whatsapp",
    value: 1567,
  },
  {
    id: 6,
    name: "whatsapp",
    value: 1567,
  },
  {
    id: 7,
    name: "whatsapp",
    value: 1567,
  },
  {
    id: 8,
    name: "whatsapp",
    value: 1567,
  },
]);
</script>
