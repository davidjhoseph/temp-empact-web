<template>
	<div class="h-full">
		<RouterView v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</RouterView>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>