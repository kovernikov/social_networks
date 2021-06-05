import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {ActionsTypes, addPostAC, changeNewTextAC, PostsItemType} from '../../../redux/state';


type MyPostType = {
    postsData: Array<PostsItemType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostType) => {

    let postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {   /*добавляет пост*/
        if (newPostElement.current) {
            // props.dispatch({type: 'ADD-POST', newPostText: props.newPostText})
            props.dispatch(addPostAC(props.newPostText))
            /*props.updateNewPostText('')*/ /*очищает поле ввода после добавления поста*/
        }
    }

    // const onPostChange = () => { /*вводит тест*/
    //     if (newPostElement.current) {
    //         props.updateNewPostText(newPostElement.current?.value);
    //     }
    // }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget?.value);
        let text = e.currentTarget?.value;
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })
        props.dispatch(changeNewTextAC(text))
    }
    //     обработчик принимает событие event
    //     типизируем event - ChangeEvent - внутри типизируем на какой элемент событие прилетает
    //     в данном случае событие прилетает на HTMLTextAreaElement


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
