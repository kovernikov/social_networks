import React from 'react';
import Profile from './Profile';
import {ProfileInfoType, ProfilePageDataType} from '../../types/types';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfileTC} from '../../redux/profileReducer'
import { usersAPI } from '../../api/api';

class ProfileContainerClass extends React.Component<ProfileContainerWithRoutePropsType> {
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

let mapStateToProps = (state: AppStateType): ProfilePageDataType => {
	return state.profilePage

}

const connector = connect(mapStateToProps, {getUserProfileTC});
type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string }
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps
const withUrlDataProfileContainer = withRouter(ProfileContainerClass)
export const ProfileContainer = connector(withUrlDataProfileContainer);

