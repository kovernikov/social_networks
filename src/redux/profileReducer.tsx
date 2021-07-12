import {PostItemType, ProfileInfoType, ProfilePageDataType} from '../types/types';
import {DispatchActionsType, SetUserProfileAT} from '../types/dispatchTypes';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'yo yo yo', likesCount: 17},
    ] as Array<PostItemType>,
    newPostText: 'it-kamasutra.com',
    profile: null
};

export type initialStateType = typeof initialState

// const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
const profileReducer = (state: ProfilePageDataType = initialState, action: DispatchActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'ADD-POST': { // block structure so we can name stateCopy with same name in all cases
            const newPost: PostItemType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            if (newPost.message.trim() !== '') {
                return {
                    ...state,
                    postsData: [newPost, ...state.postsData],
                    newPostText: ''
                }
            } else {
                return state
            }
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profileInfo}
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: ProfileInfoType): SetUserProfileAT => {
    return {
        type: SET_USER_PROFILE,
        profileInfo: profile
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;