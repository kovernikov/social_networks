import {PostItemType, ProfileInfoType} from '../../../../types/types';


export type MapStateToPropsType = {
    postsData: Array<PostItemType>
    newPostText: string
    profile: ProfileInfoType | null
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    onPostChange: (text: string) => void
}

export type MyPostType = MapStateToPropsType & MapDispatchToPropsType
