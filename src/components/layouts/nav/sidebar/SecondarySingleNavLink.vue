<template>
    <button class="flex items-center justify-between px-3 py-1.5 rounded w-full" :class="isActive ? 'text-blue bg-blue-10' : 'text-black'">
        <div class="flex items-center space-x-4">
            <div>{{title}}</div>
        </div>
        <ChevronRightIcon class="w-4 h-4"/>
    </button>
</template>

<script setup lang="ts">
import {ChevronRightIcon} from '../../../icons/AllIcons'
defineProps({
    title: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
})
</script>