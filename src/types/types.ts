export type DialogItemType = {
	id: number
	name: string
}
export type MessageItemType = {
	id: number
	message: string
}
export type PostItemType = {
	id: number
	postMessage: string
	likeCount: number
}

export type LocationType = {
	city: string
	country: string
}

export type UserType = {
	name: string
	id: number
	uniqueUrlName: string | null
	photos: {
		small: string | null
		large: string | null
	}
	status: string | null
	followed: boolean
	totalCount: number
}


export type UsersPageDataType = {
	items: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	totalCount?: any
	isFetching: boolean

}
export type ProfilePageDataType = {
	postsData: Array<PostItemType>
	newPostText: string
}
export type DialogsPageDataType = {
	dialogsData: Array<DialogItemType>
	messagesData: Array<MessageItemType>
	newMessageText: string
}
