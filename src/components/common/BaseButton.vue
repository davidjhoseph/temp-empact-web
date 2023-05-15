<template>
	<button
		:disabled="loading || disabled"
		type="button"
		class="relative inline-flex items-center text-caption justify-center px-1.5 md:px-3 py-1.5 font-medium border border-transparent rounded-md text-body focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-40"
		:class="[styles]"
	>
		<slot></slot>
		<span class="absolute inset-y-0 flex items-center right-4" v-if="loading">
			<SpinnerIcon class="w-5 h-5 animate-spin" :class="[textColor]" />
		</span>
	</button>
</template>

<script setup lang="ts">
import { SpinnerIcon } from '../icons/AllIcons';
import { computed } from 'vue';

const props = defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	bgColor: {
		type: String,
		default: 'blue',
	},
	textColor: {
		type: String,
		default: 'white',
	},
	hoverColor: {
		type: String,
		default: 'blue-10',
	},
	focusColor: {
		type: String,
		default: 'blue-10',
	},
	disabledColor: {
		type: String,
		default: 'blue-20',
	},
});

const { bgColor, textColor, hoverColor, focusColor, disabledColor } = props;

const styles = computed<string>(() => {
	return `transition-colors bg-${bgColor} text-${textColor} hover:bg-${hoverColor} focus:ring-${focusColor} disabled:bg-${disabledColor}`;
});
</script>
