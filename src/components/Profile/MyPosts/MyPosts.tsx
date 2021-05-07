import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {
    // @ts-ignore
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
                <Post message="Hi, how are you" likes="20"
                      img={'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'}/>
                <Post message="It's my first post" likes="15"
                      img={'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'}/>
            </div>
        </div>
    )
}
export default MyPosts;
