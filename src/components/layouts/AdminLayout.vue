<template>
	<div class="md:flex h-screen w-screen">
		<div class="h-full">
			<AdminSidebar />
		</div>
		<main class="flex-1 bg-gray-10">
            <NavHeader/>
			<div class="max-w-7xl mx-auto mt-10 flex items-center justify-between">
				<BreadCrumb/>
				<div class="flex items-center space-x-4">
					<BaseButton class="flex items-center space-x-2">
						<PlusIcon class="w-5 h-5"/>
						<div>Create New</div>
					</BaseButton>
					<OutlineButton class="flex items-center space-x-2" color="gray">
						<DownloadIcon class="w-5 h-5"/>
						<div>Import</div>
					</OutlineButton>
				</div>
			</div>
			<RouterView v-slot="{ Component }">
				<transition name="fastfade" mode="out-in">
					<component :is="Component" />
				</transition>
			</RouterView>
		</main>
	</div>
</template>

<script setup lang="ts">
import AdminSidebar from './AdminSidebar.vue'; 
import {PlusIcon, DownloadIcon} from '../icons/AllIcons'
import BreadCrumb from '../common/BreadCrumb.vue'; 
import BaseButton from '../common/BaseButton.vue'; 
import OutlineButton from '../common/OutlineButton.vue'; 
import NavHeader from '../layouts/nav/header/NavHeader.vue'; 
</script>
