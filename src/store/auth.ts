import axios from 'axios';
import { defineStore } from 'pinia';
import { BASE_URL } from '../config/app';
import { UserModel } from '../config/types';
import toast from '../helpers/toast';

export const useAuthStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		user: null as UserModel | null,
		token: null as string | null,
	}),
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state): UserModel | null => {
			if (state.user) {
				return new UserModel(state.user);
			}

			return null;
		},
	},
	actions: {
		async login(email: String, password: String) {
			try {
				const authResponse = await axios.post(`${BASE_URL}/auth/manager/login`, { email, password });

				const res = authResponse.data.data;

				this.user = res.user;
				this.token = res.token;
				this.user = res.user.user;

				localStorage.setItem('token', res.token);
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

				// toast.success(`Successful login`);
			} catch (e: any) {
				if (e.response && e.response.data.msg) {
					toast.error(e.response.data.msg);
				} else {
					toast.error('Oops! something went wrong!');
				}
				throw e;
			}
		},
		async logout(): Promise<void> {
			localStorage.removeItem('token');
			axios.defaults.headers.common['Authorization'] = '';
			this.token = null;
			this.user = null;
		},
	},
});
