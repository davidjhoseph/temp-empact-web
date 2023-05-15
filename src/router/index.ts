import { nextTick } from 'vue';
import { createRouter, createWebHistory, type RouteLocation } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ left: 0, top: 0 });
			}, 500);
		});
	},
});

const DEFAULT_TITLE = 'Empact';
router.afterEach((to: RouteLocation, from: RouteLocation) => {
	let pageTitle = DEFAULT_TITLE;
	if (to.meta.title) {
		pageTitle = `${to.meta.title} | ${pageTitle}`;
	}

	nextTick(() => {
		document.title = pageTitle;
	});

});
export default router;
