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
	componentDidMount() {
		this.props.getUserProfileTC(this.props.match.params.userId)
		this.props.getStatusTC(this.props.match.params.userId)
	}

	render() {
		return (
			<div>
				<Profile profile={this.props.profile} status={this.props.status}
						 updateStatus={this.props.updateStatusTC}/>
			</div>
		)
	}
}

let mapStateToProps = (state: AppStateType) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
}

const connector = connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC});
type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string };
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps;

export default compose<React.ComponentType>(
	connector,
	withRouter,
	// withAuthRedirect
)(ProfileContainer)
