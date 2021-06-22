import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import {StoreType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPosts';

type ProfilePropsType = {

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;
