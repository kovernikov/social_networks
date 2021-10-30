import React from 'react';
import styles from './Users.module.css'
import {UserType} from '../../types/types';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	items: UserType[]
	followingInProgress: number[]
	onPageChange: (pegeNumber: number) => void
	followUser: (userID: number) => void
	unfollowUser: (userID: number) => void
}

export const Users = (props: UsersPropsType) => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let pagesView: number[] = []
	if (props.currentPage === 1) {
		pagesView = pages.filter(p => p < 10)
		pagesView.push(pages.length)
	} else if (props.currentPage === pages.length) {
		pagesView.push(1)
		pagesView = [...pagesView, ...pages.filter(p => p > props.currentPage - 9)]
	} else if (props.currentPage > pages.length - 9) {
		pagesView.push(1)
		let lowRange = props.currentPage - 4
		let highRange = props.currentPage + 5
		pagesView = [...pagesView, ...pages.filter(p => p > lowRange && p < highRange)]
		pagesView.push(pages.length)
	} else {
		pagesView.push(1)
		let lowRange = props.currentPage - 4
		let highRange = props.currentPage + 5
		pagesView = [...pagesView, ...pages.filter(p => p > lowRange && p < highRange)]
	}

	return <div>
		<div className={styles.pages}>
			{pages.map(p => {
				return <span
					className={props.currentPage === p ? styles.selectedPage : ''}
					onClick={(event) => {
						props.onPageChange(p)
					}}>{p}</span>
			})}

		</div>
		{props.items.map(u => <div key={u.id} className={styles.body}>
                <span>
                    <div>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
								 className={styles.photo}/>
						</NavLink>
                    </div>
                    <div>{u.followed
						? <button disabled={props.followingInProgress.some(id => id === u.id)}
								  onClick={() => {
									  props.unfollowUser(u.id)
								  }} className={styles.btn}>Unfollow</button>
						: <button disabled={props.followingInProgress.some(id => id === u.id)}
								  onClick={() => {
									  props.followUser(u.id)
								  }} className={styles.btn}>Follow</button>}</div>
                </span>
			<span className={styles.cont}>
                    <span>
                        <div>{u.name}</div>
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
