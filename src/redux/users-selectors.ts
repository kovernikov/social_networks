import { UserType } from "../types/types"
import { AppStateType } from "./redux-store"


export const getUsers = (state: AppStateType): Array<UserType> => {
	return state.usersPageData.items
}

export const getTotalUsersCount = (state: AppStateType): number => {
	return state.usersPageData.totalUsersCount
}

export const getPageSize = (state: AppStateType): number => {
	return state.usersPageData.pageSize
}

export const getCurrentPage = (state: AppStateType): number => {
	return state.usersPageData.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
	return state.usersPageData.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
	return state.usersPageData.followingInProgress
}

export const getUsersFilter = (state: AppStateType) => {
	return state.usersPageData.filter
}