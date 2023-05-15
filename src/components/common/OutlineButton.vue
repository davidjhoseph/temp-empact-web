<template>
	<button
		type="button"
		:class="colorClass"
		class="relative inline-flex text-caption items-center justify-center px-1.5 md:px-3 py-1.5 font-medium transition-colors bg-transparent border rounded-md text-body focus:outline-none focus:ring-2 focus:ring-offset-2"
	>
		<slot></slot>
		<span class="absolute inset-y-0 flex items-center right-4" v-if="loading">
			<SpinnerIcon class="w-5 h-5 animate-spin" />
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SpinnerIcon } from '../icons/AllIcons';

const props = defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
	},
});

const colorClass = computed(() => {
	if (props.color === 'green') {
		return 'border-green text-green hover:text-green-90 hover:border-green-90 focus:ring-green-70';
	}
	if (props.color === 'gray') {
		return 'border-gray-40 bg-gray-20 text-gray-70 focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60';
	}

	if (props.color === 'red') {
		return 'border-red text-red focus:ring-red';
	}

	return 'border-black text-black focus:ring-gray-60 hover:text-gray-60 hover:border-gray-60';
});
</script>
