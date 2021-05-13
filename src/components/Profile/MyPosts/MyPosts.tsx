import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: '20'},
        {id: 2, message: 'It\'s my first post', likesCount: '15'},
    ]
    let imgData = [
        {id: 1, foto: 'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'},

    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}
                      img={imgData[0].foto}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}
                      img={imgData[0].foto}/>
            </div>
        </div>
    )
}
export default MyPosts;
