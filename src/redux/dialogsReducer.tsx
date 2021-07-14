import {ActionsTypes} from '../types/dispatchTypes';
import { DialogType, MessagesType } from '../types/types';


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE ';


const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello!!!'},
        {id: 2, message: 'Haw are you?'},
        {id: 3, message: 'This is my friend.'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ] as Array<MessagesType>,
    newMessageBody: '' as string
};

export type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export default dialogsReducer;
