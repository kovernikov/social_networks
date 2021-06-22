import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsPageDataType} from '../../types/types';
import {initialStateType} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/redux-store';
import {MessagesPageType} from '../../redux/store';


export type DialogsPropsType= {
    // state: initialStateType
    // appPost: (text: string) => void
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: MessagesPageType
}


const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    // let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = props.dialogsPage.newMessageBody;

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
