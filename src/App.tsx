import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {StateType} from './redux/state';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Navbar/Friends/Friends';
import Navigation from './components/Navbar/Navigation/Navigation';

export type AppType = {
    appState: StateType
    appPost: (pastMessage: string) => void
}

const App: React.FC<AppType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/sitbar'} render={() => <Navigation appState={props.appState}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.appState.dialogsPage} appPost={props.appPost}/>}/>
                <Route path={'/profile'} render={() => <Profile state={props.appState.profilePage} appPost={props.appPost}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/friends'} render={() => <Friends photo={props.appState.sitebar}/>}/>
            </div>
        </div>
    )
}


export default App;
