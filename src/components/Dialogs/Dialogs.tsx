import React from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogType, MessagesPageType, MessagesType, ProfilePageType, StateType} from '../../redux/state';


export type DialogsProps = {
    stateR: MessagesPageType

}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let dialogsElements = props.stateR.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.stateR.messages.map(m => <Message message={m.message}/>);

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
