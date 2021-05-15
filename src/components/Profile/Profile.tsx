import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsItemType} from '../../index';


type ProfileType = {
    dataApp: Array<PostsItemType>
}

const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts={props.dataApp}/>

        </div>
    )
}
export default Profile;
