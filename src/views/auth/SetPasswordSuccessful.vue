<template>
    <div class="md:py-20 py-10">
        <AskToRegister/>
        <div>
            <div class="md:mt-40 mt-20 flex justify-center">
                <ContactAddedIcon class="w-20" />
            </div>
            <div class="mt-6 text-center text-black text-header-6">Your password has been successfully reset. <br/>Click below to login</div>
            <div class="text-caption text-gray-70 text-center mt-2">Your new password has been successfully reset, click the button to login</div>
            <BaseButton class="w-full mt-4">Continue</BaseButton>
            <div class="flex justify-center text-caption mt-4">
                <button class="font-medium text-blue" @click="goToLogin">Back to Login</button>
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from "../../components/common/BaseButton.vue"
import { ContactAddedIcon } from '../../components/icons/AllIcons';
import { useRouter } from "vue-router";
import { ROUTES } from "../../router/routes";
import AskToRegister from "../../components/common/auth/AskToRegister.vue"

const router = useRouter();

const goToLogin = () => {
    router.push({name: ROUTES.LOGIN});
}
</script>