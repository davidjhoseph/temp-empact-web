<template>
    <div class="flex items-center space-s-4">
        <div class="cursor-pointer p-2" @click="prevPage">
            <ChevronRightIcon class="w-5 h-5 transform rotate-180 text-blue" />
        </div>
        <div class="flex items-center space-s-4">
            <div v-for="i in 5" :key="i" class="w-6 h-6 flex items-center justify-center text-caption font-medium rounded cursor-pointer"
                @click="selectedPage = i" :class="selectedPage === i ? 'bg-blue text-white' : 'text-gray-60'">{{ i }}</div>
        </div>
        <div class="cursor-pointer p-2" @click="nextPage">
            <ChevronRightIcon class="w-5 h-5 text-blue" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon } from '../icons/AllIcons';
const selectedPage = ref(1)
const nextPage = () => {
    if(selectedPage.value === 5) return;
    selectedPage.value++
}
const prevPage = () => {
    if(selectedPage.value === 1) return;
    selectedPage.value--
}
</script>