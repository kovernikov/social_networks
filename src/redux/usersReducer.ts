import {
	DispatchActionsType,
	FollowUserAT,
	SetCurrentPageAT,
	setTotalUserCountAT,
	SetUsersAT,
	UnfollowUserAT
} from '../types/dispatchTypes';
import {UsersPageDataType, UserType} from '../types/types';

const initialState = {
	items: [],
	pageSize: 50,
	totalUsersCount: 50,
	currentPage: 1,
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
				items: action.items
			}
		case 'SET-CURRENT-PAGE':
			return {...state, currentPage: action.currentPage}
		case 'SET-TOTAL-USER-COUNT':
			return {...state, totalUsersCount: action.count}
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
export const SetCurrentsPageAC = (currentPage: number): SetCurrentPageAT => {
	return {type: 'SET-CURRENT-PAGE', currentPage}
}

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUserCountAT => {
	return {type: 'SET-TOTAL-USER-COUNT', count: totalUsersCount}
}