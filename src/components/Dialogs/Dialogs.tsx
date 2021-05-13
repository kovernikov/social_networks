import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css'

type DialogItemProps = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemProps = {
    message: string
}

const Message = (props: MessageItemProps) => {
    return <div className={s.dialog}> {props.message} </div>
}

type DialogsProps = {
    DialogsItem: Array<DialogItemProps>
    MessagesItem: Array<MessageItemProps>
}

const Dialogs = (props: DialogsProps) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello!!!'},
        {id: 2, message: 'Haw are you?'},
        {id: 3, message: 'This is my friend.'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
