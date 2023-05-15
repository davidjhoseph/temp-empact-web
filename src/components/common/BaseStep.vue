<template>
    <div>
        <div class="relative flex items-end border-b-2 px-4 my-4 mb-6 md:px-0 md:mb-10 border-gray-30 space-x-2">
            <button v-for="customTab in tabs" :key="customTab.tab" :class="customTab.tab === tab ? 'border-b-2 border-blue bg-white rounded-tr rounded-tl pt-1.5 text-black' : 'text-gray-60 border-transparent'" @click="handleTabChange(customTab)" class="border-b-2">
                <div class="absolute flex items-center mb-2 space-x-2 left-4 -top-7 md:left-0 md:top-0 md:relative px-3">
                    <HomeIcon class="w-4 h-4" />
                    <div class="text-caption">
                        {{ customTab.label }}</div>
                    <div class="flex items-center justify-center flex-shrink-0 w-4 h-4 rounded-md text-micro" :class="customTab.tab === tab ? 'bg-blue text-white' : 'bg-gray-20 text-gray-60'">
                        <div>{{ customTab.tab }}</div>
                    </div>
                </div>
            </button>
        </div>
        <div>
            <transition name="fade" mode="out-in">
                <slot />
            </transition>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { HomeIcon } from '../icons/AllIcons'
import { onMounted, watch, type PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const emits = defineEmits(['update:tab', 'tabClicked']);
const props = defineProps({
    tabs: {
        type: Array as PropType<{ label: string, tab: number, query: string }[]>,
        required: true
    },
    tab: {
        type: Number,
        required: true
    }
})

watch(() => route.query.tab, (val) => {
    const currentTab = props.tabs.find(p => p.query === val)
    if (currentTab) {
        handleTabChange(currentTab)
    }
})

watch(() => props.tabs, (val: any) => {
    const currentTab = props.tabs.find(p => p.tab === val)
    if (currentTab) {
        handleTabChange(currentTab)
    }
})

const handleTabChange = (tab: any) => {
    emits('update:tab', tab);
    router.push({
        query: {
            tab: tab.query
        }
    })
}


onMounted(() => {
    if (!route.query.tab) {
        const currentTab = props.tabs.find(p => p.tab === props.tab)
        if (currentTab) {
            handleTabChange(currentTab)
        }
        return;
    }
    const currentTab = props.tabs.find(p => p.query === route.query.tab)
    if (currentTab) {
        handleTabChange(currentTab)
    }
})
</script>