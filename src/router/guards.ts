import { RouteLocation } from 'vue-router';
import toast from '../helpers/toast';
import { useAuthStore } from '../store/auth';
import { ROUTES } from './routes';

export const mustBeLoggedIn = (_: RouteLocation, __: RouteLocation, next: Function) => {
	const authStore = useAuthStore();
	if (authStore.isLoggedIn) {
		const user = authStore.currentUser;

		return next();
	}

	toast.info('You must be logged in to access this page');
	// const redirectUrl = window.location.href;
	// return next({ name: 'login', query: { redirect: redirectUrl } });

	return next({ name: ROUTES.LOGIN });
};
