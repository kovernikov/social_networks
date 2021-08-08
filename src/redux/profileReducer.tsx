import {PostItemType, ProfileInfoType, ProfilePageDataType} from '../types/types';
import {DispatchActionsType, SetProfileStatusAT, SetUserProfileAT} from '../types/dispatchTypes';
import {AppDispatchType} from './redux-store';
import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi, how are you', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 15},
		{id: 3, message: 'yo yo yo', likesCount: 17},
	] as Array<PostItemType>,
	// newPostText: 'it-kamasutra.com',
	profile: null,
	status: ''
};

export type initialStateType = typeof initialState

// const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
const profileReducer = (state: ProfilePageDataType = initialState, action: DispatchActionsType) => {
	switch (action.type) {
		case 'ADD-POST': { // block structure so we can name stateCopy with same name in all cases
			const newPost: PostItemType = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				postsData: [newPost, ...state.postsData],
				newPostText: ''
			}

		}
		case 'SET-USER-PROFILE': {
			return {...state, profile: action.profileInfo}
		}

		case 'SET-STATUS': {
			return {
				...state,
				status: action.status
			}
		}
		default:
			return state;
	}
}

export const addPostAC = (newPostText: string) => {
	return {
		type: ADD_POST,
		newPostText: newPostText
	} as const
}
const setUserProfile = (profile: ProfileInfoType): SetUserProfileAT => {
	return {
		type: 'SET-USER-PROFILE',
		profileInfo: profile
	} as const
}
const setStatus = (status: string): SetProfileStatusAT => {
	return {
		type: SET_STATUS,
		status: status
	} as const
}

export const getUserProfileTC = (id: string) => (dispatch: AppDispatchType) => {
	let userId: string;
	id ? userId = id : userId = '17771';
	usersAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response))
		});
}

export const getStatusTC = (id: string) => (dispatch: AppDispatchType) => {
	let userId: string;
	id ? userId = id : userId = '17771';
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data))
		});
}

export const updateStatusTC = (statusText: string) => (dispatch: AppDispatchType) => {
	profileAPI.updateStatus(statusText)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(statusText))
			}
		})
}

export default profileReducer;