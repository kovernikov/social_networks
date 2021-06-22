import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsType, SitebarType, StateType} from '../../redux/store';
import Navigation from './Navigation/Navigation';

export type SitebarTypeProps = {
    // appState: StateType
}

const Navbar: React.FC<SitebarTypeProps> = (prpps) => {
    return (
        (
            <nav className={s.nav}>

                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activelink}> Profile </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activelink}> Messages </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activelink}> Users </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activelink}> News </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activelink}> Music </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/setting" activeClassName={s.activelink}> Settings </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/friends" activeClassName={s.activelink}> Friends </NavLink>
                </div>

            </nav>
        )
    )
}
export default Navbar;
