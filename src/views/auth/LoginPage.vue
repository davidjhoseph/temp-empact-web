<template>
  <div class="mx-auto w-[525px] flex flex-col h-screen py-20">
    <Modal @closeModal="close" :open="open" />
    <!--  -->
    <div class="relative right-3">
      <img src="../../assets/logo/empact_logo.png" class="pb-12" />
    </div>

    <form>
      <div class="space-y-4">
        <h1 class="text-header3 text-blue font-bold">Welcome back to Empact</h1>
        <h2 class="text-gray-60">Sign in to continue to your account</h2>
      </div>

      <div class="my-4 space-y-8">
        <div>
          <BaseInput
            type="email"
            label="E-mail Address"
            placeholder="example@gmail.com"
            icon
          >
            >
            <template #icon>
              <MailIcon class="h-5 w-5 text-gray-70" />
            </template>
          </BaseInput>
        </div>
        <div>
          <BaseInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            icon
          >
            <template #icon>
              <LockIcon class="h-5 w-5 text-gray-70" />
            </template>
          </BaseInput>
        </div>
      </div>

      <div class="pb-5 space-y-8">
        <fieldset>
          <legend class="sr-only">Notifications</legend>
          <div class="space-y-5">
            <div class="relative flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-40 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="ml-1.5 text-sm leading-6">
                  <label for="comments" class="text-black">Remember me</label>
                </div>
              </div>

              <div>
                <button class="text-black" @click="goToForgotPassword">
                  Forgot password?
                </button>
              </div>
            </div>
          </div>
        </fieldset>

        <BaseButton class="w-full" @click="login">Sign In</BaseButton>
      </div>

      <div class="flex gap-3 w-full pb-5 pt-10">
        <button
          class="w-full border rounded-md p-3 justify-center flex items-center gap-3"
        >
          <img src="../../assets/Google.png" alt="" />
          <span> Sign in with Google</span>
        </button>
        <button
          class="w-full border rounded-md p-3 justify-center flex items-center gap-3"
        >
          <img src="../../assets/Facebook.png" alt="" />
          <span> Sign in with Facebook </span>
        </button>
      </div>
      <AskToRegister />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../../components/common/BaseButton.vue";
import BaseInput from "../../components/common/BaseInput.vue";
import Modal from "../../components/common/auth/BrandModal.vue";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import { LockIcon, MailIcon } from "../../components/icons/AllIcons";
import AskToRegister from "../../components/common/auth/AskToRegister.vue";

const router = useRouter();
const open = ref(false);

const close = () => {
  open.value = false;
};

const login = () => {
  open.value = true;
  // router.push({ name: ROUTES.HOME });
};

const goToForgotPassword = () => {
  router.push({ name: ROUTES.RESET_PASSWORD });
};
</script>
