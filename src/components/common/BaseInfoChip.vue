<template>
	<div
		class="text-caption flex items-center space-s-1 rounded border py-0.5 px-1"
		:class="[baseStyle]"
	>
		<slot />
		<div class="text-nano font-medium capitalize">{{ title }}</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
	color: {
		type: String,
		default: 'green',
	},
	title: {
		type: String,
		default: 'Approved',
	},
});

const tooltipText = computed(() => {
	if (props.title === 'Approved') return 'This section is required before you can be matched to jobs.';
	if (props.title === 'Pending') return 'Your documents have been submitted and pending verification.';
	if (props.title === 'Rejected') return 'This section is optional but a nice to have.';
	// if(props.title === 'Verified') return 'Your documents have been submitted and pending verification.'
});

const baseStyle = computed(() => {
	if (props.color === 'green') {
		return 'text-green bg-green-10';
	}
	if (props.color === 'orange') {
		return 'text-orange-60 bg-orange-20';
	}
	
	if (props.color === 'red') {
		return 'text-red bg-red-10';
	}
	return 'text-blue bg-blue-10 border-blue-40';
});
</script>
