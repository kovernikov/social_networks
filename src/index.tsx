import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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

export type DialogType = {
    id: number
    name: string
}

let dialogs: Array<DialogType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'},
]

export type MessagesType = {
    id: number
    message: string
}


let messages: Array<MessagesType> = [
    {id: 1, message: 'Hello!!!'},
    {id: 2, message: 'Haw are you?'},
    {id: 3, message: 'This is my friend.'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dataApp={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
