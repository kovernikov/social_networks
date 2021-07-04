import React from 'react';
import styles from './Users.module.css'
import {UsersPageDataType, UserType} from '../../types/types';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

type UsersPropsType = {
    usersPageData: UsersPageDataType
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (items: UserType[]) => void

}

export class UsersClassComponent extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get<UsersPageDataType>('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            this.props.setUsers(response.data.items)
        } );
    }


    render() {
        return <div>
            {this.props.usersPageData.items.map(u => <div key={u.id} className={styles.body}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" className={styles.photo}/></div>
                    <div>{u.followed
                        ? <button onClick={() => this.props.unfollowUser(u.id)} className={styles.btn}>Unfollow</button>
                        : <button onClick={() => this.props.followUser(u.id)} className={styles.btn}>Follow</button>}</div>
                </span>
                <span className={styles.cont}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    }
}
