import React from 'react';
import loader from '../../assets/images/preloader.gif';
import s from '../../components/Users/Users.module.css';

export const Preloader: React.FC = () => {
	return <div><img src={loader} className={s.imgs} alt="preloader"/></div>
}