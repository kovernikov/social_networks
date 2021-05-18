import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


type ProfileType = {
    state: ProfilePageType
    appPost: (pastMessage: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts={props.state.posts} appPost={props.appPost}/>

        </div>
    )
}
export default Profile;
