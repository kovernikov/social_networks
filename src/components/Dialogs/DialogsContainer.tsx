import React from 'react';
import {initialStateType, sendMessageAC} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hok/witthAuthRedirect';
import { compose } from 'redux';


type MapStateToPropsType = {
    dialogsPage: initialStateType
}

type MapDispatchToPropsType = {
    // updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage, /*state.dialogsPage*/
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        // updateNewMessageBody: (body: string) => {
        //
        //     dispatch(updateNewMessageBodyAC(body))
        // },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

// @ts-ignore
// const DialogsContainer = withAuthRedirect (connect (mapStateToProps, mapDispatchToProps) (Dialogs));

export default compose<React.ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
withAuthRedirect
)(Dialogs);

