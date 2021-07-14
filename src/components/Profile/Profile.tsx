import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPosts';
import { ProfileInfoType } from '../../types/types';

type ProfilePropsType = {
    profile: ProfileInfoType | null
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;
