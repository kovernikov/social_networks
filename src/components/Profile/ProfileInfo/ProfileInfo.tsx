import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from '../../../types/types';
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'
import {Preloader} from '../../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
	profile: ProfileInfoType | null
	status: string
	updateStatus: (text: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

	if (!props.profile) {
		return <Preloader/>
	} else {
		return (
			<div>
				<div className={s.descriptionBlock}>
					<img src={props.profile?.photos.large ? props.profile.photos.large : userPhoto}/>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
					<div>
						<span>{props.profile?.fullName}</span>
					</div>
					<div>
						<span>{props.profile?.lookingForAJob ? 'Looking for a job -> ' : null}</span>
						<span>{props.profile?.lookingForAJobDescription}</span>
					</div>
					<div>
						<span>{props.profile?.contacts.facebook} </span>
						<span>{props.profile?.contacts.github} </span>
						<span>{props.profile?.contacts.vk} </span>
						<span>{props.profile?.contacts.instagram} </span>
						<span>{props.profile?.contacts.twitter} </span>
						<span>{props.profile?.contacts.website} </span>
						<span>{props.profile?.contacts.youtube} </span>
						<span>{props.profile?.contacts.mainLink} </span>
					</div>
				</div>
			</div>
		)
	}
}
export default ProfileInfo;
