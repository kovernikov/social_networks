export const q = () => {}
// import React from 'react';
// import {addPostAC, changeNewTextAC, initialStateType} from '../../../redux/profileReducer';
// import MyPosts from './MyPosts';
// import {connect} from 'react-redux';
// import {AppDispatchType, AppStateType} from '../../../redux/redux-store';
// import {Dispatch} from 'redux';
//
// type PostsItemType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// // export type MyPostsContainerType = {
// //     state: initialStateType
// //     postsData: Array<PostsItemType>
// //     newPostText: string
// // }
//
// type MapStateToPropsType = {
//     postsData: Array<PostsItemType>
//     newPostText: string
// }
//
// type MapDispatchToPropsType = {
//     addPost: (newPostText: string ) => void
//     onPostChange: (text: string) => void
// }
//
// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         postsData: state.profilePage.postsData,
//         newPostText: state.profilePage.newPostText,
//     }
// }
// let mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType  => {
//     return {
//         addPost: (newPostText: string) => {
//             dispatch(addPostAC(newPostText))
//         },
//         onPostChange: (text: string) => {
//             dispatch(changeNewTextAC(text))
//         }
//     }
// }
//
// const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
//
// export default MyPostsContainer;
