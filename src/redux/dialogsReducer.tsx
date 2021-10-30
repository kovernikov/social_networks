import {ActionsTypes} from '../types/dispatchTypes';
import {DialogType, MessagesType} from '../types/types';

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
};

export type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}]
			};
		default:
			return state;
	}
}

export const sendMessageAC = (newMessageBody: string) => {
	return {
		type: SEND_MESSAGE,
		newMessageBody: newMessageBody
	} as const
}

export default dialogsReducer;
