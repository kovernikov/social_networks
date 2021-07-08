import React from 'react';
import {AppDispatchType, AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {followAC, SetCurrentsPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/usersReducer';
import {UsersPageDataType, UserType} from '../../types/types';
import axios from 'axios';
import {Users} from './Users';

const mapStateToProps = (state: AppStateType) => {
	return {
		usersPageData: state.usersPageData,
		pageSize: state.usersPageData.pageSize,
		totalUsersCount: state.usersPageData.totalUsersCount,
		currentPage: state.usersPageData.currentPage,
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
		}
	}
}

export type UsersPropsType = {
	usersPageData: UsersPageDataType
	followUser: (userID: number) => void
	unfollowUser: (userID: number) => void
	setUsers: (items: UserType[]) => void
	setCurrentPage: (pegeNumber: number) => void
	setTotalUserCount: (totalCount: number) => void
}

export class UsersAPIClassComponent extends React.Component <UsersPropsType> {

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
		return <Users usersPageData={this.props.usersPageData}
					  followUser={this.props.followUser}
					  unfollowUser={this.props.unfollowUser}
					  setUsers={this.props.setUsers}
					  onPageChanged={this.onPageChanged}/>
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassComponent);
