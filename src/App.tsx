import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {DialogType, MessagesPageType, MessagesType, ProfilePageType, state, StateType} from './redux/state';
import Dialogs from './components/Dialogs/Dialogs';

export type AppType = {
    appState: StateType


}


const App: React.FC<AppType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs stateR={props.appState.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile stateR={props.appState.profilePage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
