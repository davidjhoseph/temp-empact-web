import { LayoutDirection } from '../config/types';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useMainStore = defineStore({
	id: 'index',
	persist: true,
	state: () => ({
		layout: 'ltr' as LayoutDirection,
	}),
	getters: {
		appLayout: (state) => state.layout
	},
	actions: {
        updateLayoutDir(dir: LayoutDirection) {
            this.layout = dir;
            document.body.dir = dir;
        }
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
