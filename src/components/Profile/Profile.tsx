import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, state, StateType} from '../../redux/state';


type ProfileType = {
    stateR: ProfilePageType
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts={props.stateR.posts}/>

        </div>
    )
}
export default Profile;
