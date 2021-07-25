import React from 'react';
import Profile from './Profile';
import {ProfileInfoType, ProfilePageDataType} from '../../types/types';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfileTC} from '../../redux/profileReducer'
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hok/witthAuthRedirect';
import { compose } from 'redux';

type MapDispatchToPropsType = {
	getUserProfileTC: (userId: string) => void
}
type MapStateToPropsType = {
	profile: ProfileInfoType | null
}

class ProfileContainer extends React.Component<ProfileContainerWithRoutePropsType> {
	componentDidMount() {
		this.props.getUserProfileTC(this.props.match.params.userId)
	}

	render() {
		return (
			<div>
				<Profile profile={this.props.profile}/>
			</div>
		)
	}
}

let mapStateToProps = (state: AppStateType) => {
	return {
		profile: state.profilePage.profile,
	}
}

type ProfileContainerProps =  MapStateToPropsType & MapDispatchToPropsType;
type PathParamsType = { userId: string };
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps;

export default compose<React.ComponentType>(
	connect(mapStateToProps, {getUserProfileTC}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
