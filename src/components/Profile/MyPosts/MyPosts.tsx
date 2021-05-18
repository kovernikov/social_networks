import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostsItemType} from '../../../redux/state';

type MyPostType = {
    posts: Array<PostsItemType>
    appPost: (pastMessage: string) => void
}


const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current)
            props.appPost(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;
