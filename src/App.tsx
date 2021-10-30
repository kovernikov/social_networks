import React, {ComponentType} from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {LoginPage} from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import {compose} from 'redux';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './common/Preloader/Preloader';

export const path = {
	PROFILE: '/profile',
	DIALOGS: '/dialogs',
	CHAT: '/chat',
	DEVELOPERS: '/developers',
	LOGIN: '/login',
}
export type AppPropsType = MapDispatchType & MapStateType

class App extends React.Component<AppPropsType> {

	componentDidMount() {
		this.props.initializeApp()
	}
	
	
	render() {
		// todo: const state = props.store.getState()
		if(this.props.initialized) {
			return <Preloader/>
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer/>
				<Navbar/>
				<div className={'app-wrapper-content'}>
					<Route path={'/dialogs'}
						   render={() => <DialogsContainer/>}/>
					<Route path={'/profile/:userId?'}
						   render={() => <ProfileContainer/>}/>
					<Route path={'/users'}
						   render={() => <UsersContainer/>}/>
					<Route path={'/login'}
						   render={() => <LoginPage/>}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/setting'} render={() => <Setting/>}/>
					<Route path={'/friends'} render={() => <Friends/>}/>
				</div>
			</div>
		)
	}
}
type MapDispatchType = {
	initializeApp: () => void
	// logout: () => void
}
type MapStateType = {
	initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
	initialized: state.app.initialized
})

export default compose<ComponentType>(withRouter, connect<MapStateType, MapDispatchType,{},AppStateType>(mapStateToProps, {initializeApp}))(App);
