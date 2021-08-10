import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import s from './Header.module.css';
import {logout} from '../../redux/authReducer';
import {usersAPI} from '../../api/api';
import Header from './Header';
import {AuthType} from '../../types/types';
import axios from 'axios';


class HeaderClassComponent extends React.Component<HeaderContainerProps> {



	render() {
		return <Header login={this.props.login}
					   isAuth={this.props.isAuth}
					   logout={this.props.logout}/>
	}
}

type MapStateType = {
	isAuth: boolean
	login: string | null
}

type MapDispatchType = {
	// getAuthUserData: () => void
	logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateType => ({isAuth: state.authData.isAuth, login: state.authData.login})

const connector = connect<MapStateType, MapDispatchType,{},AppStateType>(mapStateToProps, {logout});
type HeaderContainerProps = ConnectedProps<typeof connector>;
export const HeaderContainer = connector(HeaderClassComponent);