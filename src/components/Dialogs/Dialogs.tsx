import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css'


const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
type DialogItemProps = {
    name: string
    id: number
}
type MessageItemProps = {
    message: string
}
type DialogsProps = {
    DialogsItem: Array<DialogItemProps>
    MessagesItem: Array<MessageItemProps>
}


const Message: React.FC<MessageItemProps> = (props) => {
    return <div className={s.dialog}> {props.message} </div>
}

const Dialogs = (props: DialogsProps) => {
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
