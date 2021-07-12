import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from '../../../types/types';
import userPhoto from '../../../assets/images/user.png'

type ProfileInfoPropsType = {
    profile: ProfileInfoType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img  className={s.profileImage}
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            {/*<div className={s.descriptionBlock}>*/}
            {/*    /!*<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Kot-019.jpg"/>*!/*/}
            {/*    ava + description*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large ? props.profile.photos.large : userPhoto}/>
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
export default ProfileInfo;
