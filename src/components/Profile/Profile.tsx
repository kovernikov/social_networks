import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>
    )
}
export default Profile;
