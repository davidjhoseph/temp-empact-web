<template>
    <div class="md:py-20 py-10">
       <AskToRegister/>
        <div>
            <div class="md:mt-40 mt-20 flex justify-center">
                <MessageIcon class="w-20" />
            </div>
            <div class="mt-6 text-center text-black text-header-6">Check your email</div>
            <div class="text-caption text-gray-70 text-center mt-2">We’ve sent a password reset link to <span class="font-medium">info@email.com</span></div>
            <BaseButton class="w-full mt-4" @click="goToSetNewPassword">Open email app</BaseButton>
            <div class="text-caption text-right mt-4 text-gray-50 mr-20">Didn’t receive the email? <button class="font-medium text-blue">Click to resend</button></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue"
import { MessageIcon } from '../../components/icons/AllIcons';
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import AskToRegister from "../../components/common/auth/AskToRegister.vue"


const router = useRouter();

const goToSetNewPassword = () => {
    router.push({name: ROUTES.SET_NEW_PASSWORD});
}
</script>