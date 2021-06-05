import React, {ChangeEvent} from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {ActionsTypes, MessagesPageType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/state';
import {type} from 'os';


export type DialogsProps = {
    state: MessagesPageType
    dispatch: (action: ActionsTypes) => void

}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = props.state.newMessageBody;

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : '-----';
        props.dispatch({type: 'ADD-POST', newPostText: text})
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body))
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
            {/*<div><textarea ref={newMessageElement}></textarea> </div>*/}
            {/*<div>*/}
            {/*    <button onClick={addMessage}>Send</button> </div>*/}
        </div>
    )
}

export default Dialogs;
