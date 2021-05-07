import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Kot-019.jpg"/>*/}
                ava + description
            </div>

        </div>
    )
}
export default ProfileInfo;
