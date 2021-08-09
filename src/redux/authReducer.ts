import {AuthType} from '../types/types';
import {DispatchActionsType, SetUserDataAT} from '../types/dispatchTypes';
import {AppDispatchType, AppStateType, BaseThunkType, InferActionsTypes} from './redux-store';
import {authAPI, usersAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {FormAction, stopSubmit} from 'redux-form';

let initialState = {
	id: null as (number | null),
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null
}
export type AuthInitStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export const authReducer = (state: AuthInitStateType = initialState, action: ActionsType): AuthInitStateType => {
	switch (action.type) {
		case 'SN/AUTH/SET-USER-DATA':
		case 'SN/AUTH/GET-CAPTCHA-URL':
			return {
				...state, ...action.payload
			}
		default:
			return state;
	}
}

export const actions = {
	setUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
		type: 'SN/AUTH/SET-USER-DATA',
		payload: {id, email, login, isAuth},
	} as const),
	getCaptchaUrlSuccess: (captchaUrl: string) => ({
		type: 'SN/AUTH/GET-CAPTCHA-URL',
		payload: {captchaUrl},
	} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
	await authAPI.me()
		.then(response => {
			if (response.resultCode === 0) {
				let {id, login, email} = response.data
				dispatch(actions.setUserData(id, login, email, true))
			}
		});
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string = null): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
	await authAPI.login(email, password, rememberMe, captcha)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(getAuthUserData())
			}else {
				const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
				dispatch(stopSubmit('login', {_error: message}))
			}
		});
}

export const logout = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
	await authAPI.logout()
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(actions.setUserData(null, null, null, false))
			}
		})

}