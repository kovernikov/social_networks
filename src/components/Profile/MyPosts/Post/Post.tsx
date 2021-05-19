import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={`${s.item} ${s.active}`}>
            <img src='https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'/>
            {props.message}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;
