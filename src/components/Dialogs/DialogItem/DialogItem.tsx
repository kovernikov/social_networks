import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialog.module.css'

export type DialogItemProps = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}




export default DialogItem;
