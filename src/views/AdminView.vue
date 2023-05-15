<template>
	<div class="mx-auto max-w-7xl mt-12">
		<div>
			<BaseStep :tabs="tabs" :tab="tab" @update:tab="updateTab" @tabClicked="updateTab">
				<div v-if="tab === 1" @nexttab="tab++" >tab 1</div>
				<div v-if="tab === 2" @nexttab="tab++">tab 2</div>
				<div v-if="tab === 3" @nexttab="tab++" >tab 3</div>
				<div v-if="tab === 4" @nexttab="tab++" >tab 4</div>
				<div v-if="tab === 5" @nexttab="tab++" >tab 5</div>
				<div v-if="tab === 6" @nexttab="tab++" >tab 6</div>
			</BaseStep>
		</div>
		<BaseTable/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseStep from '../components/common/BaseStep.vue'
import BaseTable from '../components/common/BaseTable.vue'

const tab = ref(1);
const updateTab = (newTab: any) => {
	tab.value = newTab.tab;
};

const tabs = [
	{
		label: 'All Users',
		tab: 1,
		query: 'all-users',
	},
	{
		label: 'All Transactions',
		tab: 2,
		query: 'all-transactions',
	},
	{
		label: 'All Plans',
		tab: 3,
		query: 'all-plans',
	},
	{
		label: 'All Props',
		tab: 4,
		query: 'all-props',
	},
	{
		label: 'All Projects',
		tab: 5,
		query: 'all-projects',
	},
];
</script>
