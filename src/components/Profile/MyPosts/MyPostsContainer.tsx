import React from 'react';
import {ActionsTypes, PostsItemType, StoreType} from '../../../redux/store';
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState();

    let addPost = () => {   /*добавляет пост*/
        props.store.dispatch(addPostAC(props.store._state.profilePage.newPostText))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(changeNewTextAC(text))
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })
        // props.dispatch(changeNewTextAC(text))
    }
    return <MyPosts postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
                    appPost={addPost}/>
}
export default MyPostsContainer;
