<template>
  <div class="text-caption text-center text-gray-70">
    Dont have an account?
    <button
      class="font-semibold text-gray-80"
      @click="router.push({ name: ROUTES.REGISTER })"
    >
      Sign up
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTES } from "../../../router/routes";
const router = useRouter();
</script>
