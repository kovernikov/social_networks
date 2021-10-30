import axios from 'axios';
import {PhotosType, PostItemType, ProfileInfoType, UserType} from '../types/types';

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {'API-KEY': '6587bf96-e19c-43d8-b7f7-8a779c2e9e9d'}
})

export const usersAPI = {
	getUsers: (currentPage: number, pageSize: number) => {
		return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	followUsers: (id: number) => {
		return instance.post<APIResponseType>(`follow/${id}`,)
			.then(response => response.data.resultCode)
	},
	unfollowUsers: (id: number) => {
		return instance.delete(`follow/${id}`,)
			.then(response => response.data.resultCode) 
	},
	// 	console.warn('use authAPI')
	// 	return authAPI.getAuth()
	// },
	getProfile: (userId: string) => {
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId);
	}
}

export const authAPI = {
	me() {
		return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
			.then(res => res.data)
	},
	login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
		return instance.post<APIResponseType<LoginResponseDataType, ResultCodeCaptcha | ResultCodes>>(`auth/login`, {email, password, rememberMe, captcha})
			.then(res => res.data)
	},
	logout() {
		return instance.delete(`auth/login`,)
			.then(res => res.data)
	},
}

export const profileAPI = {
	getProfile: (userId: string) => {
		return instance.get<ProfileInfoType>(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus: (userId: string) => {
		return instance.get<string>(`profile/status/${userId}`)
	},
	updateStatus(newText: string) {
		return instance.put<APIResponseType>(`profile/status/`, {status: newText})
	},
	savePhoto(photoFile: File) {
		const formData = new FormData()
		formData.append('image', photoFile)
		return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => res.data)
	},

	saveProfile(profile: PostItemType) {
		return instance.put<APIResponseType<PostItemType>>(`profile/`, profile)
			.then(res => res.data)
	},
}

export type APIResponseType<D = {}, RC = ResultCodes> = {
	data: D
	messages: string[]
	resultCode: RC
}

export enum ResultCodes {
	Success = 0,
	Error = 1,
}

export enum ResultCodeCaptcha {
	CaptchaIsRequired = 10
}

export type GetItemsType = {
	items: UserType[]
	totalCount: number
	error: string | null
}

type MeResponseDataType = {
	id: number,
	email: string,
	login: string
}

type LoginResponseDataType = {
	userId: number
}
type SavePhotoResponseDataType = {
	photos: PhotosType
}