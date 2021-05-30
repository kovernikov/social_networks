import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {appPost, StateType, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} appPost={appPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
