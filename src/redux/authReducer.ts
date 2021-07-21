import {AuthType} from '../types/types';
import { DispatchActionsType, SetUserDataAT} from '../types/dispatchTypes';
import { AppDispatchType } from './redux-store';
import { usersAPI } from '../api/api';

let initialState: AuthType = {
	data:
		{
			id: NaN,
			login: '',
			email: '',
		},
	isAuth: false,
	messages: [],
	fieldsErrors: [],
	resultCode: 0,
}

export const authReducer = (state = initialState, action: DispatchActionsType) => {
	switch (action.type) {
		case 'SET-USER-DATA':
			return {
				...state,
				data: {...action.data},
				isAuth: true
			}
		default:
			return state;
	}
}

export const setAuthUserData = (id: number, login: string, email: string): SetUserDataAT => {
	return {
		type: 'SET-USER-DATA',
		data: {
			id, login, email,
		}
	}
}

export const getAuthUserData = () => (dispatch: AppDispatchType) => {
	usersAPI.getAuth()
		.then(response => {
			if(response.resultCode === 0) {
				let {id, login, email} = response.data
				dispatch(setAuthUserData(id, login, email))
			}
		});
}