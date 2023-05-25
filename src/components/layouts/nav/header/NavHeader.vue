<template>
  <div class="flex items-center justify-between px-6 shadow">
    <BreadCrumb/>
    <ProfileMenu/>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from '../../../common/BreadCrumb.vue'
import ProfileMenu from './ProfileMenu.vue'
</script>
