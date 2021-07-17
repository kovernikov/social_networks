import axios from 'axios';

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {'API-KEY': '436269e6-3a0e-4ec4-988b-c3bac73f2390'}
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
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	}
}