import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPosts';
import {ProfileInfoType} from '../../types/types';

type ProfilePropsType = {
	profile: ProfileInfoType | null
	status: string
	updateStatus: (text: string) => void
}

function Profile(props: ProfilePropsType) {

	return (
		<div className={s.content}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;
