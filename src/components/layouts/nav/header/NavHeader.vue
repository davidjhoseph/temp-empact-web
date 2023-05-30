<template>
  <div class="flex items-center justify-between py-2 shadow ps-12 pe-12">
    <BreadCrumb />
    <ProfileMenu />
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from "../../../common/BreadCrumb.vue";
import ProfileMenu from "./ProfileMenu.vue";
</script>
