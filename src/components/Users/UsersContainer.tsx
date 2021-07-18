import React from 'react';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {
	followUser,
	setCurrentPage,
	toggleIsFetching,
	setTotalUserCount,
	setUsers,
	setFollowingInProgress,
	unfollowUser
} from '../../redux/usersReducer';
import {UsersPageDataType, UserType} from '../../types/types';
import axios from 'axios';
import {Users} from './Users';
import loader from '../../assets/images/loader.gif';
import s from './Users.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

const mapStateToProps = (state: AppStateType) => {
	return {
		usersPageData: state.usersPageData,
		pageSize: state.usersPageData.pageSize,
		totalUsersCount: state.usersPageData.totalUsersCount,
		currentPage: state.usersPageData.currentPage,
		isFetching: state.usersPageData.isFetching,
	}
}

// export const mapDispatchToProps = (dispatch: AppDispatchType) => {
// 	return {
// 		followUser: (userId: number) => {
// 			dispatch(followAC(userId))
// 		},
// 		unfollowUser: (userId: number) => {
// 			dispatch(unfollowAC(userId))
// 		},
// 		setUsers: (users: UserType[]) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (pegeNumber: number) => {
// 			dispatch(SetCurrentsPageAC(pegeNumber))
// 		},
// 		setTotalUserCount: (totalCount: number) => {
// 			dispatch(setTotalUsersCountAC(totalCount))
// 		},
// 		toggleIsFetching: (isFetchings: boolean) => {
// 			dispatch(toggleIsFetchingsAC(isFetchings))
// 		},
// 	}
// }

export type UsersPropsType = {
	usersPageData: UsersPageDataType
	followUser: (userID: number) => void
	unfollowUser: (userID: number) => void
	setUsers: (items: UserType[]) => void
	setCurrentPage: (pegeNumber: number) => void
	setTotalUserCount: (totalCount: number) => void
	toggleIsFetching: (isFetchings: boolean) => void
	setFollowingInProgress: (isFetching: boolean, userId: number) => void
}

export class UsersAPIClassComponent extends React.Component<UsersPropsType> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(this.props.usersPageData.currentPage, this.props.usersPageData.pageSize)
			.then(data => {
				this.props.setUsers(data.items)
				this.props.setTotalUserCount(data.totalCount)
				this.props.toggleIsFetching(false)
			});
	}

	onPageChanged = (pegeNumber: number) => {
		this.props.setCurrentPage(pegeNumber);
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(pegeNumber, this.props.usersPageData.pageSize)
			.then(data => {
				this.props.toggleIsFetching(true);
				this.props.setUsers(data.items);
				this.props.setTotalUserCount(data.totalCount)
			});
	}

	render() {
		return <>
			{this.props.usersPageData.isFetching ? <Preloader/> : null}
			<Users
				followUser={this.props.followUser}
				unfollowUser={this.props.unfollowUser}
				items={this.props.usersPageData.items}
				followingInProgress={this.props.usersPageData.followingInProgress}
				onPageChanged={this.onPageChanged}
				totalUsersCount={this.props.usersPageData.totalUsersCount}
				pageSize={this.props.usersPageData.pageSize}
				currentPage={this.props.usersPageData.currentPage}
				toggleIsFetching={this.props.toggleIsFetching}
				setFollowingInProgress={this.props.setFollowingInProgress}
			/>
		</>
	}
}

export const UsersContainer = connect(mapStateToProps, {
	followUser,
	unfollowUser,
	setUsers,
	setCurrentPage,
	setTotalUserCount,
	toggleIsFetching,
	setFollowingInProgress,
})(UsersAPIClassComponent);
