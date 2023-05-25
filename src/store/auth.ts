import axios from 'axios';
import { defineStore } from 'pinia';
import { BASE_URL } from '../config/app';
import { Brand, ManagedBrand, UserModel } from '../config/types';
import toast from '../helpers/toast';

export const useAuthStore = defineStore({
	id: 'auth',
	persist: true,
	state: () => ({
		user: null as UserModel | null,
		token: null as string | null,
		managed_brands: null as ManagedBrand[] | null,
		selected_brand: null as Brand | null
	}),
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state): UserModel | null => {
			if (state.user) {
				return new UserModel(state.user);
			}
			return null;
		},
		managedBrands: (state): ManagedBrand[] | null => {
			return state.managed_brands;
		},
		selectedBrand: (state): Brand| null => {
			return state.selected_brand;
		},
	},
	actions: {
		async login(email: String, password: String) {
			try {
				const authResponse = await axios.post(`${BASE_URL}/auth/manager/login`, { email, password });
				const res = authResponse.data.data;
				this.token = res.token;
				this.user = res.user.user;
				this.managed_brands = res.user.managed_brands;
				localStorage.setItem('token', res.token);
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
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
			this.selected_brand = null;
			this.managed_brands = null;
		},
		selectBrand(brand: Brand){
			this.selected_brand = brand;
		},
	},
});
