import React from 'react';
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import {StoreType} from '../../../redux/store';


type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();
                    let addPost = () => {   /*добавляет пост*/
                        store.dispatch(addPostAC(store._state.profilePage.newPostText))
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(changeNewTextAC(text))
                        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })
                        // props.dispatch(changeNewTextAC(text))
                    }

                    return <MyPosts postsData={state.profilePage.postsData}
                                    newPostText={state.profilePage.newPostText}
                                    updateNewPostText={onPostChange}
                                    appPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
