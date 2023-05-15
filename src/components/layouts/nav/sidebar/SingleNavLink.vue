<template>
    <button @click="router.push({name: route})" class="flex items-center justify-between px-3 py-1.5 rounded w-full" :class="isActive ? 'text-white bg-blue-60' : 'text-gray-40'">
        <div class="flex items-center space-x-4">
            <HomeIcon class="w-4 h-4"/>
            <div>{{title}}</div>
        </div>
        <ChevronRightIcon class="w-4 h-4"/>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {HomeIcon, ChevronRightIcon} from '../../../icons/AllIcons'
import {useRouter} from 'vue-router';

const router = useRouter();
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    route: {
        type: String,
        required: true
    }
})

import {useRoute} from 'vue-router';
const vueRoute = useRoute();
const isActive = computed(() =>  vueRoute.name === props.route)
</script>