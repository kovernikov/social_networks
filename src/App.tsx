import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import store, {StoreType} from './redux/store';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

export type AppPropsType = {

}

const App: React.FC<AppPropsType> = (props) => {
    // const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*<Route path={'/sitbar'} render={() => <Navigation appState={props.appState}/>}/>*/}
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer store={store} />}/>
                <Route path={'/profile'}
                       render={() => <Profile />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/friends'} render={() => <Friends photo={store._state.sidebar}/>}/>
            </div>
        </div>
    )
}


export default App;
