import {PostsItemType} from '../../../../redux/profileReducer';

export type MapStateToPropsType = {
    postsData: Array<PostsItemType>
    newPostText: string
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string ) => void
    onPostChange: (text: string) => void
}

export type MyPostType = MapStateToPropsType & MapDispatchToPropsType
