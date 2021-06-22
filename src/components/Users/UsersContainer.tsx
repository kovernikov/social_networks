import React from 'react';
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {UserType} from "../../types/types";
import {Users} from './Users';

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPageData: state.usersPageData
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
