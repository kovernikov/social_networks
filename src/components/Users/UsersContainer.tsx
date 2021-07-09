import React from 'react';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {
	followAC,
	SetCurrentsPageAC,
	toggleIsFetchingsAC,
	setTotalUsersCountAC,
	setUsersAC,
	unfollowAC
} from '../../redux/usersReducer';
import {UsersPageDataType, UserType} from '../../types/types';
import axios from 'axios';
import {Users} from './Users';
import loader from '../../assets/images/loader.gif';
import s from './Users.module.css'
import {Preloader} from '../../common/Preloader/Preloader';

const mapStateToProps = (state: AppStateType) => {
	return {
		usersPageData: state.usersPageData,
		pageSize: state.usersPageData.pageSize,
		totalUsersCount: state.usersPageData.totalUsersCount,
		currentPage: state.usersPageData.currentPage,
		isFetching: state.usersPageData.isFetching,
	}
}

export const mapDispatchToProps = (dispatch: AppDispatchType) => {
	return {
		followUser: (userId: number) => {
			dispatch(followAC(userId))
		},
		unfollowUser: (userId: number) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users: UserType[]) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pegeNumber: number) => {
			dispatch(SetCurrentsPageAC(pegeNumber))
		},
		setTotalUserCount: (totalCount: number) => {
			dispatch(setTotalUsersCountAC(totalCount))
		},
		toggleIsFetching: (isFetchings: boolean) => {
			dispatch(toggleIsFetchingsAC(isFetchings))
		},
	}
}

export type UsersPropsType = {
	usersPageData: UsersPageDataType
	followUser: (userID: number) => void
	unfollowUser: (userID: number) => void
	setUsers: (items: UserType[]) => void
	setCurrentPage: (pegeNumber: number) => void
	setTotalUserCount: (totalCount: number) => void
	toggleIsFetching: (isFetchings: boolean) => void
}

export class UsersAPIClassComponent extends React.Component <UsersPropsType> {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get<UsersPageDataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageData.currentPage}&count=${this.props.usersPageData.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setTotalUserCount(response.data.totalCount);
		});
	}

	onPageChanged = (pegeNumber: number) => {
		this.props.setCurrentPage(pegeNumber);
		this.props.toggleIsFetching(true)
		axios.get<UsersPageDataType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pegeNumber}&count=${this.props.usersPageData.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return <>
			{this.props.usersPageData.isFetching ? <Preloader /> : null}
			<Users usersPageData={this.props.usersPageData}
						 followUser={this.props.followUser}
						 unfollowUser={this.props.unfollowUser}
						 setUsers={this.props.setUsers}
						 onPageChanged={this.onPageChanged}/>
		</>
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassComponent);
