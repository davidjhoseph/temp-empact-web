<template>
  <div class="relative">
    <div
      class="md:flex md:ps-20 md:pe-20 space-s-20 items-center md:py-10 me-auto ms-auto h-screen w-screen"
    >
      <main class="flex-1">
        <RouterView v-slot="{ Component }">
          <transition name="fastfade" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
      <div class="flex-1 h-full">
        <AuthSidebar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthSidebar from "./AuthSidebar.vue";
</script>
