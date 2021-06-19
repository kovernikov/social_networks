import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import {StoreType} from '../../redux/store';

export type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onNewMessageChange = (body: string) => {
                        // let body = e.target.value;
                        store.dispatch(updateNewMessageBodyAC(body))
                    }
                    return <Dialogs state={state} updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
