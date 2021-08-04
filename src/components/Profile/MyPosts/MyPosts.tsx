import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostAC} from '../../../redux/profileReducer';
import {AppDispatchType, AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {MapDispatchToPropsType, MapStateToPropsType, MyPostType} from './types';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

const MyPosts = (props: MyPostType) => {
	const postElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

	const newPostElement = React.createRef<HTMLTextAreaElement>();
	// const addPost = () => {   /*добавляет пост*/
	// 	if (newPostElement.current) {
	// 		props.addPost('');
			/*props.updateNewPostText('')*/ /*очищает поле ввода после добавления поста*/
		// }
	// }
	// const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
	// 	props.onPostChange(e.currentTarget?.value);
		// let text = e.currentTarget?.value;
	// }
	//     обработчик принимает событие event
	//     типизируем event - ChangeEvent - внутри типизируем на какой элемент событие прилетает
	//     в данном случае событие прилетает на HTMLTextAreaElement
	
	const onNewPost = (values: any) => {
		props.addPost(values.newPostText)
	}
	return (
		<div className={s.postsBlock}>
			{/*{props.postsData[1].message}*/}
			<h3>My posts</h3>
			<div>
				<AddMyPostFormRedux onSubmit={onNewPost}/>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	)
}

type AddMyPostFormPropsType = {
	
}

const AddMyPostForm: React.FC<InjectedFormProps<AddMyPostFormPropsType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
                    <Field component={'textarea'} name={'newPostText'} placeholder={'Add posts'}
						// onChange={onPostChange} ref={newPostElement} value={props.newPostText}
					/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddMyPostFormRedux = reduxForm<AddMyPostFormPropsType>({form: 'postAddMyPostForm'})(AddMyPostForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	// no debugger
	postsData: state.profilePage.postsData,
	// newPostText: state.profilePage.newPostText,
	profile: state.profilePage.profile
})
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
	// yes debugger
	return {
		addPost: (newPostText: string) => {
			dispatch(addPostAC(newPostText))
		},
		// onPostChange: (text: string) => {
		// 	dispatch(changeNewTextAC(text))
		// }
	}
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
	mapStateToProps, mapDispatchToProps
)(MyPosts)
