<template>
  <div class="mx-auto w-[525px] flex flex-col h-screen py-12">
    <!--  -->
    <div class="relative right-3">
      <img src="images/logo/empact_logo.png" class="pb-12" />
    </div>

    <form>
      <div class="space-y-4">
        <h1 class="font-bold text-header3 text-blue">Welcome back to Empact</h1>
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
            <template #icon>
              <MailIcon class="w-5 h-5 text-gray-70" />
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
              <LockIcon class="w-5 h-5 text-gray-70" />
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
                <div class="flex items-center h-6">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 rounded border-gray-40 focus:ring-indigo-600"
                  />
                </div>
                <div class="ms-1.5 text-sm leading-6">
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

        <BaseButton class="w-full">Sign In</BaseButton>
      </div>

      <div class="flex w-full gap-3 pt-10 pb-5">
        <button
          class="flex items-center justify-center w-full gap-3 p-3 border rounded-md"
        >
          <img src="/images/Google.png" alt="" />
          <span> Sign in with Google</span>
        </button>
        <button
          class="flex items-center justify-center w-full gap-3 p-3 border rounded-md"
        >
          <img src="/images/Facebook.png" alt="" />
          <span> Sign in with Facebook </span>
        </button>
      </div>
      <AskToRegister />
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue";
import BaseInput from "../../components/common/BaseInput.vue";
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import { LockIcon, MailIcon } from "../../components/icons/AllIcons";
import AskToRegister from "../../components/common/auth/AskToRegister.vue";

const router = useRouter();

const goToForgotPassword = () => {
  router.push({ name: ROUTES.RESET_PASSWORD });
};
</script>
