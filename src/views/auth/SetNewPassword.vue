<template>
    <div class="md:py-20 py-10">
        <AskToRegister/>
        <div>
            <div class="md:mt-40 mt-20 flex justify-center">
                <KeyIcon class="w-20" />
            </div>
            <div class="mt-6 text-center text-black text-header-6">Set new password</div>
            <div class="text-caption text-gray-70 text-center mt-2">Your new password must be different
                from previous used passwords</div>
            <div class="my-4 space-y-4">
                <div>
                    <BaseInput type="password" label="Password"/>
                </div>
                <div>
                    <BaseInput type="password" label="Confirm Password"/>
                </div>
            </div>
            <BaseButton class="w-full" @click="goToResetPasswordSuccessful">Reset Password</BaseButton>
            <div class="flex justify-center text-caption mt-4">
                 <button class="font-medium text-blue" @click="goToLogin">Back to Login</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue"
import BaseInput from "../../components/common/BaseInput.vue"
import { KeyIcon } from '../../components/icons/AllIcons';
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import AskToRegister from "../../components/common/auth/AskToRegister.vue"


const router = useRouter();

const goToResetPasswordSuccessful = () => {
    router.push({name: ROUTES.SET_NEW_PASSWORD_SUCCESSFUL});
}

const goToLogin = () => {
    router.push({name: ROUTES.LOGIN});
}
</script>