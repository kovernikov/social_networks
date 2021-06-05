import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

    newPostText: string
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />

        </div>
    )
}
export default Profile;
