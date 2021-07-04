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
	id: number
	photos: PhotosType
	followed: boolean
	fullName: string
	status: string
	location: LocationType
}

export type PhotosType = {
	small: string
	large: string
}

export type UsersPageDataType = {
	users: UserType[]
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
