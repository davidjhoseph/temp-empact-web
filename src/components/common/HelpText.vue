<template>
	<div class="flex items-start" :class="color" v-if="text">
		<InfoCircleIcon class="me-1 h-4 w-4 flex-shrink-0" />
		<span class="text-caption text-xs">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
import { InfoCircleIcon } from '../../components/icons/AllIcons';
import { computed } from 'vue';
const props = defineProps({
	type: {
		type: String,
		default: 'info',
	},
	text: {
		type: String,
		default: '',
	},
});

const color = computed(() => {
	switch (props.type) {
		case 'info':
			return 'text-blue';
		case 'success':
			return 'text-green';
		case 'error':
			return 'text-red';
		default:
			return 'text-blue';
	}
});
</script>
