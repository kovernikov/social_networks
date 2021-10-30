import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

export default Header;


type HeaderPropsType = {
	isAuth: boolean,
	login: string | null,
	logout: () => void
}

function Header(props: HeaderPropsType) {
	return <header className={s.header}>
			<div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-I86af1RynC0u9KgHKUD-H6tCwT_Cf_P2Q&usqp=CAU"/>
			</div>
			<div className={s.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
					: <NavLink to={'/login'}>Login</NavLink> }
			</div>
		</header>

}