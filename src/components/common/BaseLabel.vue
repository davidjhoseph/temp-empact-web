<template>
	<label :for="labelFor" class="text-caption mb-1 flex align-middle text-gray-90">
		{{ text }}
		<span
			v-if="required"
			class="text-caption my-auto ml-1 text-red"
		>
			*
		</span>
	</label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
	labelFor: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
	},
	required: {
		type: Boolean,
		default: false,
	},
});

const tooltipText = computed(() => `${props.text ? props.text : 'This'} is a required field`);
</script>
