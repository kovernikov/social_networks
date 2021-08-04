import {PostItemType, ProfileInfoType} from '../../../../types/types';


export type MapStateToPropsType = {
	postsData: Array<PostItemType>
	// newPostText: string
	profile: ProfileInfoType | null
}

export type MapDispatchToPropsType = {
	addPost: (values: string) => void
	// onPostChange: (text: string) => void
}

export type MyPostType = MapStateToPropsType & MapDispatchToPropsType
