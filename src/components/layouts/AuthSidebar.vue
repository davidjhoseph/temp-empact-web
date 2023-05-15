<template>
    <div class="w-full h-full flex items-center">
        <img :src="imageToShow" class="w-full h-full rounded-[50px] object-cover">
    </div>
</template>
<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import { ROUTES } from '../../router/routes';
const route = useRoute();
const isPasswordPages = computed(() => {
	const routesToCheck = [ROUTES.RESET_PASSWORD, ROUTES.RESET_PASSWORD_CONFIRMATION, ROUTES.SET_NEW_PASSWORD, ROUTES.SET_NEW_PASSWORD_SUCCESSFUL]
	return routesToCheck.includes(route.name as string);
})
const imageToShow = computed(() => isPasswordPages.value ? '/src/assets/auth_layout_banner.png' : '/src/assets/login_layout_banner.png');
</script>
<style>  
</style>