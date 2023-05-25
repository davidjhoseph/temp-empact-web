<template>
  <div class="flex items-center space-s-5">
    <div
      @click="router.back()"
      class="flex items-center justify-center w-6 h-6 mt-2 border-2 rounded-full cursor-pointer border-gray-60">
      <Vector class="items-center w-6 h-6 px-1" />
    </div>
    <div class="flex items-center space-s-4" v-for="(crumb, index) in breadcrumbs" :key="index">
      <div class="h-5">
        <div class="text-base capitalize cursor-pointer" :class="index + 1 === breadcrumbs.length ? 'text-blue' : 'text-gray-60'"
          @click="goToLink(crumb)"> {{ stripRouteName(crumb) }}</div>
      </div>
      <div class="flex items-center justify-center w-5 h-5 mt-1" v-if="index + 1 !== breadcrumbs.length">
        <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vector, ArrowRightIcon } from "../icons/AllIcons";
import { useRouter, useRoute } from 'vue-router';
import { ComputedRef, computed } from "vue";
import { stripRouteName } from "../../helpers/functions";
import { ROUTES } from "../../router/routes";
const router = useRouter();
const route = useRoute();
const breadcrumbs = computed(() => route.meta.breadcrumbs) as ComputedRef<[]>
const goToLink = (link: string) => {
  let exists = Object.values(ROUTES).includes(link);
  if (!exists) return;
  router.push({ name: link })

}
</script>

