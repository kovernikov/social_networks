import React from 'react';
import styles from './Users.module.css'
import {UsersPageDataType, UserType} from '../../types/types';

type UsersPropsType = {
    usersPageData: UsersPageDataType
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    debugger
    if (props.usersPageData.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg',
                followed: true,
                fullName: 'Artem',
                status: 'I am the boss',
                location: {city: 'Praha', country: 'Cech republic'}
            },
            {
                id: 2,
                photoUrl: 'https://radiustheme.com/demo/html/cirkle/media/team/team_5.jpg',
                followed: false,
                fullName: 'Luba',
                status: 'I am a student',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg',
                followed: false,
                fullName: 'Ivan Boroda',
                status: 'I am boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {props.usersPageData.users.map(u => <div key={u.id} className={styles.body}>
                <span>
                    <div><img src={u.photoUrl} alt="avatar" className={styles.photo}/></div>
                    <div>{u.followed
                        ? <button onClick={() => props.unfollowUser(u.id)} className={styles.btn}>Unfollow</button>
                        : <button onClick={() => props.followUser(u.id)} className={styles.btn}>Follow</button>}</div>
                </span>
                <span className={styles.cont}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
