import axios from 'axios';
import { ProfileInfoType } from '../types/types';

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {'API-KEY': '6587bf96-e19c-43d8-b7f7-8a779c2e9e9d'}
})

export const usersAPI = {
	getUsers: (currentPage: number, pageSize: number) => {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	followUsers: (id: number) => {
		return instance.post(`follow/${id}`,)
			.then(response => response.data.resultCode)
	},
	unfollowUsers: (id: number) => {
		return instance.delete(`follow/${id}`,)
			.then(response => response.data.resultCode)
	},
	getAuth: () => {
		return instance.get('auth/me')
			.then(response => response.data)
	},
	getProfile: (userId: string) => {
		return instance.get<ProfileInfoType>(`profile/${userId}`)
			.then(response => response.data)
	}
}