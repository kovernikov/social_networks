import React from 'react';
import {initialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';


// export type MessagesPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessagesType>
//     newMessageBody: string
// }

type MapStateToPropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage, /*state.dialogsPage*/
        isAuth: state.authData.isAuth
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {

            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

// @ts-ignore
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
