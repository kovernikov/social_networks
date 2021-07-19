import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarReducer: sidebarReducer,
	usersPageData: usersReducer,
	authData: authReducer,
})


export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type StoreType = typeof store;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;

// export type AppStateType = ReturnType<typeof rootReducer>
//
// export const store = createStore(rootReducer);
//@ts-ignore
window.store = store

