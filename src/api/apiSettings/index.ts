import axios, {AxiosInstance} from 'axios';

export const clientRequest = (headers?: Record<string, unknown>): AxiosInstance => {
	const instance = axios.create({
		baseURL: process.env.REACT_APP_API_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
	});
	return instance;
};
