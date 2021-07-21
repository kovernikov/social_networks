import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import s from './Header.module.css';
import {setAuthUserData, getAuthUserData} from '../../redux/authReducer';
import {usersAPI} from '../../api/api';
import Header from './Header';
import {AuthType} from '../../types/types';
import axios from 'axios';


class HeaderClassComponent extends React.Component<HeaderContainerProps> {

	componentDidMount() {
		usersAPI.getAuth()
		this.props.getAuthUserData()
	}

	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login}/>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {isAuth: state.authData.isAuth, login: state.authData.data.login}
}

const connector = connect(mapStateToProps, {
	getAuthUserData,
});
type HeaderContainerProps = ConnectedProps<typeof connector>;
export const HeaderContainer = connector(HeaderClassComponent);