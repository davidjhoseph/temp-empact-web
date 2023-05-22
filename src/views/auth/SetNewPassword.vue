<template>
  <div class="mx-auto w-[525px] flex flex-col h-screen py-20">
    <!--  -->
    <div class="relative right-3">
      <img src="../../assets/logo/empact_logo.png" class="pb-12" />
    </div>

    <form class="space-y-16">
      <div class="space-y-6">
        <h1 class="text-header3 text-blue font-bold">Reset password?</h1>
        <h2 class="text-gray-60">
          Don’t worry we can help you out! Type in your email address and we
          will send a password reset to you.
        </h2>
      </div>

      <div class="my-4 space-y-8">
        <div>
          <BaseInput
            type="password"
            label="New password*"
            placeholder="Enter your password"
            icon
          >
            <template #icon>
              <LockIcon class="h-5 w-5 text-gray-70" />
            </template>
          </BaseInput>
        </div>
        <div>
          <BaseInput
            type="password"
            label="Confirm new password*"
            placeholder="Re-enter your password"
            icon
          >
            <template #icon>
              <LockIcon class="h-5 w-5 text-gray-70" />
            </template>
          </BaseInput>
        </div>
      </div>

      <div>
        <BaseButton class="w-full">Change password</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue";
import BaseInput from "../../components/common/BaseInput.vue";
import { LockIcon } from "../../components/icons/AllIcons";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import AskToRegister from "../../components/common/auth/AskToRegister.vue";

const router = useRouter();

const goToResetPasswordSuccessful = () => {
  router.push({ name: ROUTES.SET_NEW_PASSWORD_SUCCESSFUL });
};

const goToLogin = () => {
  router.push({ name: ROUTES.LOGIN });
};
</script>
