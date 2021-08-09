import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './Login.module.scss'
import {Checkbox, Input} from '../../common/Preloader/FormsControls/FormControls';
import {required} from '../../utils/validators/validators';
import {useDispatch, useSelector, connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {path} from '../../App';
import {login} from '../../redux/authReducer';

type FormDataType = {
	login: string
	password: string
	rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,
	LoginFormOwnProps> & LoginFormOwnProps> = ({
	handleSubmit,
	error,
	captchaUrl
}) => {
	return (
		<form onSubmit={handleSubmit} className={s.form}>

			<div className={s.testData}>
				<p>Use test data</p>
				<p>Email: free@samuraijs.com</p>
				<p>Password: free</p>
			</div>
			<div className={s.inputWrapper}>
				<Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
			</div>
			<div className={s.inputWrapper}>
				<Field placeholder={'Password'} name={'password'} type={'password'} component={Input}
					   validate={[required]}/>
			</div>
			<div className={s.checkboxWrapper}>
				<Field type={'checkbox'} name={'rememberMe'} component={Checkbox}/> remember me
			</div>
			<div>
				<button className={s.loginBtn}>Login</button>
			</div>
			{error && <div className={s.formSummaryError}>{error}</div>}
			<div>

			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type LoginFormOwnProps = {
	captchaUrl: string | null
}

type LoginFormValuesType = {
	captcha: string | null //this type name have to match with field name 'captcha'
	email: string
	password: string
	rememberMe: boolean
}

export const LoginPage: React.FC = () => {

	const captchaUrl = useSelector((state: AppStateType) => state.authData.captchaUrl)
	const isAuth = useSelector((state: AppStateType) => state.authData.isAuth)
	const dispatch = useDispatch()


	const onSubmit = (formData: LoginFormValuesType) => {
		dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
	}

	if (isAuth) {
		return <Redirect to={path.PROFILE}/>
	}

	return (
		<div className={s.header}>
			<div className={s.singIn}>
				<h1 className={s.pageName}>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
			</div>
		</div>

	)
}
// export default connect(null, {login})(login);