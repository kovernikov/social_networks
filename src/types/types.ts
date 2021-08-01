// import {DialogType, MessagesType} from '../redux/dialogsReducer';

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
	// state: initialStateType
	// appPost: (text: string) => void
	updateNewMessageBody: (body: string) => void
	sendMessage: () => void
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
export type ProfileInfoType = {
	userId: number | string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: {
		github: string
		vk: string
		facebook: string
		instagram: string
		twitter: string
		website: string
		youtube: string
		mainLink: string
	}
	photos: {
		small: string | null
		large: string | null
	}
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
	// totalCount: number
}
export type UsersPageDataType = {
	items: UserType[]
	pageSize: number
	totalUsersCount: number
	currentPage: number
	totalCount?: number
	isFetching: boolean
	followingInProgress: number[];
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
	newPostText: string
	profile: ProfileInfoType | null
	status: string
}
export type DialogsPageDataType = {
	dialogsData: Array<DialogItemType>
	messagesData: Array<MessageItemType>
	newMessageText: string
}
