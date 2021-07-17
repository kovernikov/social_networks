import {ProfileInfoType, UserType} from './types';
import {addPostAC, changeNewTextAC, setUserProfile} from '../redux/profileReducer';
import {sendMessageAC, updateNewMessageBodyAC} from '../redux/dialogsReducer';
import { setAuthUserData } from '../redux/authReducer';

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessageText: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type FollowUserAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowUserAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: 'SET-USERS'
    items: UserType[]
}

export type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type setTotalUserCountAT = {
    type: 'SET-TOTAL-USER-COUNT'
    count: number
}

export type setIsFetchingAT = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type SetUserProfileAT = {
    type: 'SET-USER-PROFILE',
    profileInfo: ProfileInfoType
}

export type SetUserDataAT = {
    type: 'SET-USER-DATA',
    data: {
        id: number,
        login: string,
        email: string,
    }
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>

export type DispatchActionsType = SendMessageActionType
    | UpdateNewMessageBodyActionType
    | AddPostActionType
    | UpdateNewPostTextActionType
    | FollowUserAT
    | UnfollowUserAT
    | SetUsersAT
    | SetCurrentPageAT
    | setTotalUserCountAT
    | setIsFetchingAT
    | SetUserProfileAT
    | SetUserDataAT