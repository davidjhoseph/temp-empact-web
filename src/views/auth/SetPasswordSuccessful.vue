<template>
  <div class="w-[30rem] mx-auto h-screen py-16">
    <div>
      <div class="flex justify-center">
        <ContactAddedIcon class="w-20" />
      </div>
      <div class="mt-2 text-center font-semibold text-black text-header-6">
        Set new password
      </div>
      <div class="text-gray-70 text-center mt-2 px-12">
        Your new password has been successfully reset. click the button to login
      </div>
      <BaseButton class="w-full mt-4" @click="goToLogin">Sign in</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue";
import { ContactAddedIcon } from "../../components/icons/AllIcons";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import AskToRegister from "../../components/common/auth/AskToRegister.vue";

const router = useRouter();

const goToLogin = () => {
  router.push({ name: ROUTES.LOGIN });
};
</script>
