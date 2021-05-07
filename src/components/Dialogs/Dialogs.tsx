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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="Sveta" id={3}/>
                <DialogItem name="Sasha" id={4}/>
                <DialogItem name="Valera" id={5}/>
                <DialogItem name="Viktor" id={6}/>
            </div>
            <div className={s.messages}>
                <Message message="Hello!!!"/>
                <Message message="Haw are you?"/>
                <Message message="This is my friend."/>
                <Message message="Yo!!!"/>
                <Message message="Yo!!"/>
                <Message message="Yo!"/>
            </div>
        </div>
    )
}

export default Dialogs;
