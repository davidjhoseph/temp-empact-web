<template>
  <div class="border border-gray-30 rounded-md">
    <div class="flex justify-between py-4 ps-4 pe-4">
      <div class="font-bold text-balck">{{ props.title }}</div>
      <div><slot name="viewAll"></slot></div>
    </div>
    <div class="py-2 px-4" v-for="i in platforms" :key="i.id">
      <div class="flex justify-between">
        <div class="flex space-s-2 items-center">
          <div>
            <img :src="`/images/${i.icon}`" alt="icon_images" class="" />
          </div>
          <div class="text-gray-80">{{ i.name }}</div>
        </div>

        <div class="text-grauy-80">{{ i.value }}</div>
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
    icon: "vector (5).png",
  },
  {
    id: 2,
    name: "Telegram",
    value: 1567,
    icon: "Telegram.png",
  },
  {
    id: 3,
    name: "Instagram",
    value: 1567,
    icon: "Instagram.png",
  },
  {
    id: 4,
    name: "link copied",
    value: 1567,
    icon: "Vector (6).png",
  },
  {
    id: 5,
    name: "Twitter",
    value: 1567,
    icon: "Twitter.png",
  },
  {
    id: 6,
    name: "email",
    value: 1567,
    icon: "Mail.png",
  },
  {
    id: 7,
    name: "Whatsapp",
    value: 1567,
    icon: "Vector (5).png",
  },
  {
    id: 8,
    name: "Facebook",
    value: 1567,
    icon: "Facebook.png",
  },
]);
</script>
