import {
	DispatchActionsType,
	FollowUserAT,
	SetCurrentPageAT, SetFollowingInProgress, setIsFetchingAT,
	setTotalUserCountAT,
	SetUsersAT,
	UnfollowUserAT
} from '../types/dispatchTypes';
import {UsersPageDataType, UserType} from '../types/types';

const initialState = {
	items: [],
	pageSize: 7,
	totalUsersCount: 100,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

export const usersReducer = (state: UsersPageDataType = initialState, action: DispatchActionsType): UsersPageDataType => {
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
		case 'TOGGLE-IS-FETCHING':
			return {...state, isFetching: action.isFetching}
		case "SET-FOLLOWING-IN-PROGRESS":
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return state;
	}
}

export const followUser = (userID: number): FollowUserAT => {
	return {type: 'FOLLOW', userID}
}

export const unfollowUser = (userID: number): UnfollowUserAT => {
	return {type: 'UNFOLLOW', userID}
}

export const setUsers = (items: UserType[]): SetUsersAT => {
	return {type: 'SET-USERS', items}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => {
	return {type: 'SET-CURRENT-PAGE', currentPage}
}

export const setTotalUserCount = (totalUsersCount: number): setTotalUserCountAT => {
	return {type: 'SET-TOTAL-USER-COUNT', count: totalUsersCount}
}

export const toggleIsFetching = (isFetching: boolean): setIsFetchingAT => {
	return {type: 'TOGGLE-IS-FETCHING', isFetching}
}
export const setFollowingInProgress = (isFetching: boolean, userId: number): SetFollowingInProgress => {
	return {type: "SET-FOLLOWING-IN-PROGRESS", isFetching, userId}
}