import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarReducer: sidebarReducer,
})



export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type StoreType = typeof store;

const store = createStore(rootReducer);
export default store;

// export type AppStateType = ReturnType<typeof rootReducer>
//
// export const store = createStore(rootReducer);
