import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';

export type AppPropsType = {

}

const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer />}/>
                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>
                <Route path={'/login'}
                       render={() => <LoginPage/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/friends'} render={() => <Friends />}/>
            </div>
        </div>
    )
}


export default App;
