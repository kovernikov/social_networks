import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostAC, changeNewTextAC} from '../../../redux/profileReducer';
import {AppDispatchType, AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {MapDispatchToPropsType, MapStateToPropsType, MyPostType} from './types';

const MyPosts = (props: MyPostType) => {
	const postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

	const newPostElement = React.createRef<HTMLTextAreaElement>();
	const addPost = () => {   /*добавляет пост*/
		if (newPostElement.current) {
			props.addPost('');
			/*props.updateNewPostText('')*/ /*очищает поле ввода после добавления поста*/
		}
	}
	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.onPostChange(e.currentTarget?.value);
		// let text = e.currentTarget?.value;
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
                    <textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	// no debugger
	postsData: state.profilePage.postsData,
	newPostText: state.profilePage.newPostText,
})
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
	// yes debugger
	return {
		addPost: (newPostText: string) => {
			dispatch(addPostAC(newPostText))
		},
		onPostChange: (text: string) => {
			dispatch(changeNewTextAC(text))
		}
	}
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
	mapStateToProps, mapDispatchToProps
)(MyPosts)
