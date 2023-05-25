<template>
  <button
    class="border-s-2 py-2 w-full flex justify-center ps-5 pe-5"
    :class="
      isActive
        ? 'border-blue-20 bg-blue-60'
        : 'border-transparent bg-transparent'
    "
  >
    <HomeIcon class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { HomeIcon } from "../../../icons/AllIcons";
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
