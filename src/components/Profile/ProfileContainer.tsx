import React from 'react';
import Profile from './Profile';
import {ProfileInfoType, ProfilePageDataType} from '../../types/types';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfileTC, getStatusTC, updateStatusTC} from '../../redux/profileReducer'
import {usersAPI} from '../../api/api';
import {withAuthRedirect} from '../../hok/witthAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {

	updateProfile() {
		let id = +this.props.match.params.userId
		let userId: number | null = id ? id : this.props.authorizedUserId
		if (!userId) {
			this.props.history.push('/login')
		}
		this.props.getUserProfileTC(this.props.match.params.userId)
		this.props.getStatusTC(this.props.match.params.userId)

	}

	componentDidMount() {
		this.updateProfile()
	}

	render() {
		return (
			<div>
				<Profile profile={this.props.profile}
						 status={this.props.status}
						 updateStatus={this.props.updateStatusTC}/>
			</div>
		)
	}
}

type MapDispatchType = {
	getUserProfileData: (userId: number) => void
	getStatusFromUser: (userId: number) => void
	updateOwnProfileStatus: (status: string) => void
	savePhoto: (photo: File) => void
	saveProfileData: (profile: ProfileInfoType) => void
}
type MapStateType = {
	profile: ProfileInfoType | null
	status: string
	authorizedUserId: number | null
	isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateType => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.authData.id,
		isAuth: state.authData.isAuth
	}
}

const connector = connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC});
type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string };
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps;

export default compose<React.ComponentType>(
	connector,
	withRouter,
	withAuthRedirect
)(ProfileContainer)
