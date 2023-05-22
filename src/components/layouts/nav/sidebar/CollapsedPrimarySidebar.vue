<template>
  <div class="text-white bg-blue-80 py-6 h-full">
    <div class="flex justify-center">
      <img src="../../../../assets/sidebarBannersm.png" alt="" />
    </div>
    <div class="my-6">
      <CollapsedSIngleNavLink isActive />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <div class="text-nano text-center text-gray-40 mb-2 mt-6">Sub Header</div>
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <div class="text-nano text-center text-gray-40 mb-2 mt-6">Sub Header</div>
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
      <CollapsedSIngleNavLink />
    </div>
  </div>
</template>
<script setup lang="ts">
import CollapsedSIngleNavLink from "./CollapsedSingleNavLink.vue";
</script>
