import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BASE_URL + '/api';
export const BASE_URL_V2 = BASE_URL + '/v2';

export const api = axios;
