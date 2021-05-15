import React from 'react';
import s from './../Dialog.module.css'


export type MessageItemProps = {
    message: string
}


const Message: React.FC<MessageItemProps> = (props) => {
    return <div className={s.dialog}> {props.message} </div>
}


export default Message;
