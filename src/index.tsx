import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store, {rootReducer} from './redux/redux-store';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);



// function rerenderEntireTree() {
//
// }

// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);