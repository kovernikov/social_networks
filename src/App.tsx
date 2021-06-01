import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import store, {StateType, StoreType} from './redux/state';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Navbar/Friends/Friends';
import Navigation from './components/Navbar/Navigation/Navigation';

export type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Route path={'/sitbar'} render={() => <Navigation appState={props.appState}/>}/>*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={state.dialogsPage}
                                              appPost={props.store.appPost.bind(props.store)}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile profilePage={state.profilePage}
                                              appPost={props.store.appPost.bind(props.store)}
                                              updateNewPostText={store.updateNewPostText.bind(props.store)}
                                              newPostText={store._state.profilePage.newPostText}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/friends'} render={() => <Friends photo={store._state.sitebar}/>}/>
            </div>
        </div>
    )
}


export default App;
