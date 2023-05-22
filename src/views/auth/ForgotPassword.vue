<template>
  <div class="mx-auto w-[525px] flex flex-col h-screen py-20">
    <!--  -->
    <div class="relative right-3">
      <img src="../../assets/logo/empact_logo.png" class="pb-12" />
    </div>

    <form class="space-y-10">
      <div class="space-y-6">
        <div class="flex gap-3 items-center cursor-pointer" @click="goToLogin">
          <BackArrowIcon />
          <p class="font-semibold text-blue">Back</p>
        </div>
        <h1 class="text-header3 text-blue font-bold">Forgot password?</h1>
        <h2 class="text-gray-60">
          Don’t worry we can help you out! Type in your email address and we
          will send a password reset to you.
        </h2>
      </div>

      <div class="pt-8 my-4 space-y-5">
        <div>
          <BaseInput
            type="email"
            label="E-mail Address"
            placeholder="example@gmail.com"
            icon
          >
            <template #icon>
              <MailIcon class="h-5 w-5 text-gray-70" />
            </template>
          </BaseInput>
        </div>
      </div>

      <div>
        <BaseButton class="w-full">Reset password</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue";
import AskToRegister from "../../components/common/auth/AskToRegister.vue";
import BaseInput from "../../components/common/BaseInput.vue";
import { MailIcon, BackArrowIcon } from "../../components/icons/AllIcons";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";

const router = useRouter();

const goToLogin = () => {
  router.push({ name: ROUTES.LOGIN });
};
</script>
