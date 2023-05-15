<template>
    <div class="text-white bg-blue-80 py-6 px-4 h-full">
        <img src="../../../../assets/sidebarbannerlarge.png" alt="">
        <div class="my-6">
            <SingleNavLink title="Home" :route="ROUTES.HOME_DASHBOARD"/>
            <SingleNavLink title="Content Manager" :route="ROUTES.CONTENT_MANAGEMENT"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ROUTES } from '../../../../router/routes';
import SingleNavLink from './SingleNavLink.vue'
</script>