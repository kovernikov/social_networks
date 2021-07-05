import React from 'react';
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followAC, SetCurrentsPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/usersReducer';
import {UserType} from "../../types/types";
import {UsersClassComponent} from './UsersClassComponent';

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClassComponent);
