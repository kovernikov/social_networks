import {DispatchActionsType, FollowUserAT, SetUsersAT, UnfollowUserAT} from '../types/dispatchTypes';
import {UsersPageDataType, UserType} from '../types/types';

const initialState = {
    users: [],
}

export const usersReducer = (state: UsersPageDataType = initialState, action: DispatchActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [/*...state.users,*/ ...action.users]
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

export const setUsersAC = (users: UserType[]): SetUsersAT => {
    return {type: 'SET-USERS', users}
}
