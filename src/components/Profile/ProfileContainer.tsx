import React from 'react';
import Profile from './Profile';
import {ProfileInfoType, ProfilePageDataType} from '../../types/types';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect, ConnectedProps} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { usersAPI } from '../../api/api';

class ProfileContainerClass extends React.Component<ProfileContainerWithRoutePropsType> {
	componentDidMount() {
		let userId: string;
		this.props.match.params.userId ? userId = this.props.match.params.userId : userId = '2';
		axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
			});
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

const connector = connect(mapStateToProps, {setUserProfile});
type ProfileContainerProps = ConnectedProps<typeof connector>;
type PathParamsType = { userId: string }
type ProfileContainerWithRoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps
const withUrlDataProfileContainer = withRouter(ProfileContainerClass)
export const ProfileContainer = connector(withUrlDataProfileContainer);

