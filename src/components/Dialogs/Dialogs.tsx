import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {MessagesPageType} from '../../redux/store';


export type DialogsProps = {
    state: MessagesPageType
    // appPost: (text: string) => void
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let state = props.state

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.onNewMessageChange(updateNewMessageBodyAC(body))
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
                        <button onClick={props.sendMessage}> Sent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
