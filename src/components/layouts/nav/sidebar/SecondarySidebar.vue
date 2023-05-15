<template>
    <div class="bg-white w-80 flex flex-col h-full">
        <div class="text-gray-80 text-body font-bold h-20 flex items-center px-4">Menu Title</div>
        <div class="flex-1 border-r border-gray-30 px-4 shadow-lg">
            <SecondarySingleNavLink title="Home" isActive/>
            <SecondarySingleNavLink title="Home" />
            <SecondarySingleNavLink title="Home" />
            <SecondarySingleNavLink title="Home" />
            <SecondarySingleNavLink title="Home" />
            
        </div>
    </div>
</template>
<script setup lang="ts">
import SecondarySingleNavLink from './SecondarySingleNavLink.vue'
</script>