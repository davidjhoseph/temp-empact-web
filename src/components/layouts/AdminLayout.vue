<template>
  <FullPrimarySidebar>
    <div class="lg:pl-72">
      <NavHeader/>
      <main class="py-10">
        <div class="sm:px-6 lg:px-4">
          <RouterView v-slot="{ Component }">
            <transition name="fastfade" mode="out-in">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
      </main>
    </div
  ></FullPrimarySidebar>
</template>

<script setup lang="ts">
import FullPrimarySidebar from "../layouts/nav/sidebar/FullPrimarySidebar.vue";
import NavHeader from "./nav/header/NavHeader.vue";
</script>
