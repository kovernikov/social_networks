import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {appPost, StateType, updateNewPostText} from './redux/state';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from './StoreContext';

function rerenderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
