<template>
    <div class="text-caption text-right text-gray-70 mr-20">Dont have an account? <button
        class="font-bold text-gray-80" @click="router.push({name: ROUTES.REGISTER})">Register</button></div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import { ROUTES } from '../../../router/routes';
const router = useRouter();
</script>