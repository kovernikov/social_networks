import React from 'react';
import s from './Dialog.module.css'
import Message, {MessageItemProps} from './Message/Message';
import DialogItem, {DialogItemProps} from './DialogItem/DialogItem';
import {PostsItemType} from '../../index';



export type DialogsProps = {
    AppType: Array<PostsItemType>
    DialogsItem: Array<DialogItemProps>
    MessagesItem: Array<MessageItemProps>
}



const Dialogs: React.FC<DialogsProps> = (props ) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ]

    let messages = [
        {id: 1, message: 'Hello!!!'},
        {id: 2, message: 'Haw are you?'},
        {id: 3, message: 'This is my friend.'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
