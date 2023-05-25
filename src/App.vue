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
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useMainStore } from './store';
const store = useMainStore();
onMounted(() => {
	if (store.appLayout === 'rtl') {
		document.body.dir = 'rtl';
		return;
	}
	document.body.dir = 'ltl';
})
</script>