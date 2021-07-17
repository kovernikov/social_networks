import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default Header;


type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <div>
                <h1>SBN</h1>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}