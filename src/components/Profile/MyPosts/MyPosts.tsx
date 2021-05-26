import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostsItemType} from '../../../redux/state';


type MyPostType = {
    postsData: Array<PostsItemType>
    appPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: MyPostType) => {

    let postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {   /*добавляет пост*/
        if (newPostElement.current) {
            props.appPost();
            /*props.updateNewPostText('')*/ /*очищает поле ввода после добавления поста*/
        }
    }

    let onPostChange = () => { /*вводит тест*/
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current?.value);
        }

    }

    return (
        <div className={s.postsBlock}>

            {props.postsData[1].message}

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
