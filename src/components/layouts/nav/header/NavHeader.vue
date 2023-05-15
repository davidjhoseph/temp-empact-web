<template>
    <div class="flex items-center justify-between h-20 px-6 shadow">
        <div class="flex items-center space-x-5">
            <BackButtonIcon class="w-8 h-8"/>
            <div class="text-black font-bold text-header6">Page Title</div>
        </div>
        <div class="flex items-center space-x-4">
            <div class="text-right">
                <div class="text-black font-medium text-micro">David Carrasco</div>
                <div class="text-gray-60 text-nano">davidcarrasco@mail.com</div>
            </div>
            <div class="w-14 h-14 rounded-full bg-blue-60"></div>
            <button>
                <ArrowDownIcon class="w-8 h-8 text-gray-60"/>
            </button>
        </div>

    </div>
</template>
<script setup lang="ts">
    import { BackButtonIcon, ArrowDownIcon } from '../../../icons/AllIcons'
</script>