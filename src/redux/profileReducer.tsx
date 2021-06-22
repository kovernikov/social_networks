import {ActionsTypes,  ProfilePageType} from './store';
import {DialogType} from './dialogsReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostsItemType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'yo yo yo', likesCount: 17},
    ] as Array<PostsItemType>,
    newPostText: 'it-kamasutra.com'
};

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsItemType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0,
            }
            return  {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '' /*очищает поле ввода после добавления поста*/
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
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
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;
