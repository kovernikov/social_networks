import React from 'react';
import {StoreType} from '../../redux/store';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

export type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs state={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
}

export default DialogsContainer;
