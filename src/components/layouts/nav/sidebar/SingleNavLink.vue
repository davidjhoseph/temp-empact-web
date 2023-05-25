<template>
  <button
    @click="clickedLink"
    class="flex items-center justify-between w-full ps-3 pe-3 py-2 rounded bg-opacity-[0.28]"
    :class="isActive ? 'text-white bg-blue-60' : 'text-gray-40'"
  >
    <div class="flex items-center space-s-4">
      <slot name="icon"></slot>
      <div>{{ title }}</div>
    </div>
    <slot name="arrowIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ROUTES_MAPPING } from "../../../../router/routes";

const router = useRouter();
const vueRoute = useRoute();

const currentRoute = computed(() => vueRoute.name);

const isActive = computed(
  () =>
    currentRoute.value === props.route ||
    ROUTES_MAPPING[props.route]?.includes(currentRoute.value as string)
);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  route: {
    type: String,
    required: true,
  },
});

const clickedLink = () => {
  // emits('clicked');
  router.push({ name: props.route });
};
</script>
