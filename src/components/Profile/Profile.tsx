import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


export type PostsItemType = {
    id: number
    message: string
    likesCount: string
    img: string
}

let posts: Array<PostsItemType> = [
    {
        id: 1,
        message: 'Hi, how are you',
        likesCount: '12',
        img: 'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'
    },
    {
        id: 2,
        message: 'It\'s my first post',
        likesCount: '15',
        img: 'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'
    }
]

const Profile = (props: PostsItemType) => {

    return (
        <div className={s.content}>

            <ProfileInfo/>
            <MyPosts posts={posts}/>

        </div>
    )
}
export default Profile;
