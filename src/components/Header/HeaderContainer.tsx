import React from 'react';
import {connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import s from './Header.module.css';
import {setAuthUserData} from '../../redux/authReducer';
import { usersAPI } from '../../api/api';
import Header from './Header';
import { AuthType } from '../../types/types';
import axios from 'axios';


class HeaderClassComponent extends React.Component<HeaderContainerProps> {

    componentDidMount() {
        usersAPI.getAuth()
            .then(response => {
                if(response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {isAuth: state.authData.isAuth, login: state.authData.data.login}
}

const connector = connect(mapStateToProps, {
    setAuthUserData,
});
type HeaderContainerProps = ConnectedProps<typeof connector>;
export const HeaderContainer = connector(HeaderClassComponent);