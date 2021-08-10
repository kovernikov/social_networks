import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {connect, ConnectedProps} from 'react-redux';
import {
	followUser,
	setCurrentPage,
	setTotalUserCount,
	setUsers,
	toggleIsFetching,
	unfollowUser,
	getUsersThunkCreator,
	followUserThunkCreator,
	unfollowUserThunkCreator,
} from '../../redux/usersReducer';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hok/witthAuthRedirect';
import {compose} from 'redux';


// @ts-ignore
export class UsersContainer extends React.Component<UsersContainerProps> {

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.usersPageData.currentPage, this.props.usersPageData.pageSize);
	}

	onPageChange = (currentPage: number) => {
		this.props.getUsersThunkCreator(currentPage, this.props.usersPageData.pageSize)
	}

	render() {
		return <>
			{this.props.usersPageData.isFetching ? <Preloader/> : null}
			<Users
				followUser={this.props.followUserThunkCreator}
				unfollowUser={this.props.unfollowUserThunkCreator}
				items={this.props.usersPageData.items}
				followingInProgress={this.props.usersPageData.followingInProgress}
				onPageChange={this.onPageChange}
				totalUsersCount={this.props.usersPageData.totalUsersCount}
				pageSize={this.props.usersPageData.pageSize}
				currentPage={this.props.usersPageData.currentPage}
			/>
		</>
	}
}

const mapStateToProps = (state: AppStateType) => {
	return {
		usersPageData: state.usersPageData,
	}
}

export default compose<React.ComponentType>(
	// withAuthRedirect,
	connect(mapStateToProps, {
		followUser,
		unfollowUser,
		setCurrentPage,
		getUsersThunkCreator,
		followUserThunkCreator,
		unfollowUserThunkCreator,
	})
)(UsersContainer)