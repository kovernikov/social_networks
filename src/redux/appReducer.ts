import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {getAuthUserData} from './authReducer'
import {AppStateType, InferActionsTypes} from './redux-store';

let initializeState = {
	initialized: false
}

export type AppInitStateType = typeof initializeState
type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (state: AppInitStateType = initializeState, action: ActionsType): AppInitStateType => {
	switch (action.type) {
		case 'SN/APP/INITIALIZED_SUCCESS':
			return {...state, initialized: true}
		default:
			return state
	}
}

//Action
export const actions = {
	initializedSuccess:() => ({
		type: 'SN/APP/INITIALIZED_SUCCESS',
	} as const)
}

//Thunk
export const initializeApp = (): ThunkType =>
	(dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
		let promise = dispatch(getAuthUserData())
		Promise.all([promise])
			.then(() => {
				dispatch(actions.initializedSuccess)
			})
	}

//Type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>