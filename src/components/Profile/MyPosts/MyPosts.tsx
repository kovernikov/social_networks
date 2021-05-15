import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post'
import {PostsItemType} from '../../../redux/state';

type MyPostType = {
    posts: Array<PostsItemType>
}


const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} img={p.img}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;
