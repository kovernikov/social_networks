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
	setCurrentPage: (pegeNumber: number) => void
	setTotalUserCount: (totalCount: number) => void
}

export class UsersClassComponent extends React.Component <UsersPropsType> {

	componentDidMount() {
		axios.get<UsersPageDataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageData.currentPage}&count=${this.props.usersPageData.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount);
		});
	}

	onPageChanged = (pegeNumber: number) => {
		this.props.setCurrentPage(pegeNumber);
		axios.get<UsersPageDataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pegeNumber}&count=${this.props.usersPageData.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		const pagesCount = Math.ceil(this.props.usersPageData.totalUsersCount / this.props.usersPageData.pageSize)

		const pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}
		return <div>
			<div>
				{pages.map(p => {
					return <span
						className={this.props.usersPageData.currentPage === p ? styles.selectedPage : ''} onClick={ (event) => {this.onPageChanged(p)}}>{p}</span>
				})}

			</div>
			{this.props.usersPageData.items.map(u => <div key={u.id} className={styles.body}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
							  className={styles.photo}/></div>
                    <div>{u.followed
						? <button onClick={() => this.props.unfollowUser(u.id)} className={styles.btn}>Unfollow</button>
						: <button onClick={() => this.props.followUser(u.id)}
								  className={styles.btn}>Follow</button>}</div>
                </span>
				<span className={styles.cont}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.uniqueUrlName}</div>
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
