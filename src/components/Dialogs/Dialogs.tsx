import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPropsType} from '../../types/types';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import { Textarea } from '../../common/Preloader/FormsControls/FormControls';
import {maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';


const Dialogs = (props: DialogsPropsType) => {
	const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
	// let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
	// let messagesElements = state.messages.map(m => <Message message={m.message}/>);
	const newMessageBody = props.dialogsPage.newMessageBody;

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
	// newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<div><Field component={Textarea} name={'newMessageBody'} placeholder="Enter your message" validate={[required, maxLength50]}/></div>
				<div>
					<button> Sent</button>
				</div>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
