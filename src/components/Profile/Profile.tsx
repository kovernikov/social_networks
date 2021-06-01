import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfileType = {
    profilePage: ProfilePageType
    appPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} appPost={props.appPost} updateNewPostText={props.updateNewPostText}/>

        </div>
    )
}
export default Profile;
