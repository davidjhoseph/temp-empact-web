<template>
        <div class="">
            <div class="mt-6 text-black text-header-6">Sign in to your account</div>
            <div class="text-caption text-gray-70">Enter your account information below</div>
            <div class="my-4 space-y-4">
                <div>
                    <BaseInput type="email" label="Email Address" icon>
                        <template #icon>
                            <MailIcon class="h-5 w-5 text-gray-70" />
                        </template>
                    </BaseInput>
                </div>
                <div>
                    <BaseInput type="password" label="Password" icon>
                        <template #icon>
                            <LockIcon class="h-5 w-5 text-gray-70" />
                        </template>
                    </BaseInput>
                </div>
            </div>
            <div>

                <BaseButton class="w-full">Sign In</BaseButton>
                <div class="text-caption text-right mt-4 text-gray-50 mr-20">Forgot your password? <button
                        class="font-medium text-blue" @click="goToForgotPassword">Reset Password</button></div>
            </div>
            <AskToRegister/>

        </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue"
import BaseInput from "../../components/common/BaseInput.vue"
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import { LockIcon, MailIcon } from "../../components/icons/AllIcons";
import AskToRegister from "../../components/common/auth/AskToRegister.vue"


const router = useRouter();

const goToForgotPassword = () => {
    router.push({ name: ROUTES.RESET_PASSWORD });
}
</script>