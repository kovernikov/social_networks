// import {setUsersAC} from "../redux/usersReducer";
// import {UserType} from "./types";

import {UserType} from './types';

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

export type DispatchActionsType = SendMessageActionType
    | UpdateNewMessageBodyActionType
    | AddPostActionType
    | UpdateNewPostTextActionType
    | FollowUserAT
    | UnfollowUserAT
    | SetUsersAT
    | SetCurrentPageAT
    | setTotalUserCountAT