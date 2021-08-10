// import {DialogType, MessagesType} from '../redux/dialogsReducer';

import { FilterType } from "../redux/usersReducer"

export type DialogItemType = {
	id: number
	name: string
}

export type DialogType = {
	id: number
	name: string
}

export type MessagesType = {
	id: number
	message: string
}

export type DialogsPropsType = {
	updateNewMessageBody: (body: string) => void
	sendMessage: (values: string) => void
	dialogsPage: MessagesPageType
	isAuth: boolean
}
export type MessagesPageType = {
	dialogs: Array<DialogType>
	messages: Array<MessagesType>
	newMessageBody: string
}
export type MessageItemType = {
	id: number
	message: string
}
export type PostItemType = {
	id: number
	message: string
	likesCount: number
}
export type IconsType = {
	id: number
	img: string
}
export type FriendsType = {
	id: number
	name: string
}
export type SitebarType = {
	friends: Array<FriendsType>
	icon: Array<IconsType>
}
export type ContactType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}
export type ProfileInfoType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactType
	aboutMe: string
	photos: PhotosType
}
export type PhotosType = {
	small: string | null
	large: string | null
}
export type UserType = {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}
export type UsersPageDataType = {
	items: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	totalCount?: number
	isFetching: boolean
	followingInProgress: number[];
	filter: FilterType
}
export type AuthType = {
	data:
		{
			id: number,
			login: string,
			email: string,
		},
	isAuth: boolean
	messages: string[],
	fieldsErrors: string[],
	resultCode: number,
}

export type ProfilePageDataType = {
	postsData: Array<PostItemType>
	// newPostText: string
	profile: ProfileInfoType | null
	status: string
}
export type DialogsPageDataType = {
	dialogsData: Array<DialogItemType>
	messagesData: Array<MessageItemType>
	newMessageText: string
}
