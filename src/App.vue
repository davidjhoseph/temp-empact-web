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
import { RouterView, useRouter } from 'vue-router';
import { useMainStore } from './store';
import { useAuthStore } from './store/auth';
import { ROUTES } from './router/routes';
const store = useMainStore();
const authStore = useAuthStore();
const router = useRouter();

const managePageLayout = () => {
	if (store.appLayout === 'rtl') {
		document.body.dir = 'rtl';
		return;
	}
	document.body.dir = 'ltl';
}

const logout = () => {
	authStore.logout();
	router.push({ name: ROUTES.LOGIN });
};

onMounted(() => {
	managePageLayout();
	if(!authStore.selectedBrand){
		logout();
	}
})
</script>