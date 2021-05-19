import React from 'react';
import s from './Dialog.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {MessagesPageType} from '../../redux/state';


export type DialogsProps = {
    state: MessagesPageType
    appPost: (pastMessage: string) => void

}


const Dialogs: React.FC<DialogsProps> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : '-----';
        props.appPost(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            {/*<div><textarea ref={newMessageElement}></textarea> </div>*/}
            {/*<div>*/}
            {/*    <button onClick={addMessage}>Send</button> </div>*/}
        </div>
    )
}

export default Dialogs;
