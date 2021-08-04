import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPropsType} from '../../types/types';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


const Dialogs = (props: DialogsPropsType) => {
	const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	// let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
	// let messagesElements = state.messages.map(m => <Message message={m.message}/>);
	const newMessageBody = props.dialogsPage.newMessageBody;


	// const onSendMessageClick = () => {
	// 	props.sendMessage()
	// }

	// const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
	// 	let body = e.target.value;
	// 	props.updateNewMessageBody(body);
	// }

	const onNewMessage = (values: any) => {
		props.sendMessage(values.newMessageBody);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageFormRedux onSubmit={onNewMessage}/>
		</div>
	)
}

type AddMessageFormPropsType = {
	newMessageBody: string
	// onNewMessage: (values: string) => void
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<div><Field component={'textarea'} name={'newMessageBody'} placeholder="Enter your message"/></div>
				<div>
					<button> Sent</button>
				</div>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
