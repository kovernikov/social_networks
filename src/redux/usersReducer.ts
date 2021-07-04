import {DispatchActionsType, FollowUserAT, SetUsersAT, UnfollowUserAT} from '../types/dispatchTypes';
import {UsersPageDataType, UserType} from '../types/types';

const initialState = {
    items: [],
}

export const usersReducer = (state: UsersPageDataType = initialState, action: DispatchActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                items: state.items.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                items: [/*...state.users,*/ ...action.items]
            }
        default:
            return state;
    }
}

export const followAC = (userID: number): FollowUserAT => {
    return {type: 'FOLLOW', userID}
}

export const unfollowAC = (userID: number): UnfollowUserAT => {
    return {type: 'UNFOLLOW', userID}
}

export const setUsersAC = (items: UserType[]): SetUsersAT => {
    return {type: 'SET-USERS', items}
}