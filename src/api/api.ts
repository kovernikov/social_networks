import axios from 'axios';
import {ProfileInfoType} from '../types/types';

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
		console.warn('use authAPI')
		return authAPI.getAuth()
	},
	getProfile: (userId: string) => {
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId);
	}
}

export const authAPI = {
	getAuth: () => {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
}

export const profileAPI = {
	getProfile: (userId: string) => {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus: (userId: string) => {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(newText: string) {
		return instance.put(`profile/status/`, {status: newText})
	}
}