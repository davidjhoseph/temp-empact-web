<template>
    <div class="md:py-20 py-10">
        <AskToRegister/>
        <div>
            <div class="md:mt-40 mt-20 flex justify-center">
                <KeyIcon class="w-20" />
            </div>
            <div class="mt-6 text-center text-black text-header-6">Forgot password?</div>
            <div class="text-caption text-gray-70 text-center mt-2">Enter the email associated with your account and we’ll send
                an email with instructions to reset your password</div>
            <div class="my-4">
                <div>
                    <BaseInput type="email" placeholder="Enter Email Address" class="bg-gray-20 placeholder:text-gray-40" label="Email Address" icon>
                        <template #icon>
                            <MailIcon class="h-5 w-5 text-gray-70" />
                        </template>
                    </BaseInput>
                </div>
            </div>
            <BaseButton class="w-full" @click="goToForgotPassword">Send Instructions</BaseButton>
        </div>


    </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue"
import AskToRegister from "../../components/common/auth/AskToRegister.vue"
import BaseInput from "../../components/common/BaseInput.vue"
import { KeyIcon, MailIcon } from '../../components/icons/AllIcons';
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";

const router = useRouter();

const goToForgotPassword = () => {
    router.push({name: ROUTES.RESET_PASSWORD_CONFIRMATION});
}
</script>