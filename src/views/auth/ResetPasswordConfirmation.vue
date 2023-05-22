<template>
  <div class="w-[30rem] mx-auto h-screen py-16">
    <div>
      <div class="flex justify-center">
        <MessageIcon class="w-20" />
      </div>
      <div class="mt-2 text-center font-semibold text-black text-header-6">
        Check your email
      </div>
      <div class="text-gray-70 text-center mt-2">
        We’ve sent a password reset link to
        <span class="font-medium">info@email.com</span>
      </div>
      <BaseButton class="w-full mt-4" @click="goToSetNewPassword"
        >Close</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue";
import { MessageIcon } from "../../components/icons/AllIcons";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";

const router = useRouter();

const goToSetNewPassword = () => {
  router.push({ name: ROUTES.SET_NEW_PASSWORD });
};
</script>
