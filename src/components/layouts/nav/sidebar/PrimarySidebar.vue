<template>
  <div class="h-full">
    <FullPrimarySideBar v-if="!collapse" />
    <CollapsedPrimarySideBar v-else />
  </div>
</template>
<script setup lang="ts">
import FullPrimarySideBar from "./FullPrimarySidebar.vue";
import CollapsedPrimarySideBar from "./CollapsedPrimarySidebar.vue";
defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
});
</script>
