<template>
  <button
    class="flex items-center justify-between ps-3 pe-3 py-1.5 rounded w-full"
    :class="isActive ? 'text-blue bg-blue-10' : 'text-black'"
  >
    <div class="flex items-center space-s-4">
      <div>{{ title }}</div>
    </div>
    <ChevronRightIcon class="w-4 h-4" />
  </button>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "../../../icons/AllIcons";
defineProps({
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
