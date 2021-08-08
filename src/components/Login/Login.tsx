import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './Login.module.scss'
import {Checkbox, Input } from '../../common/Preloader/FormsControls/FormControls';
import { required } from '../../utils/validators/validators';

type FormDataType = {
	login: string
	password: string
	rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.form}>

			<div className={s.testData}>
				<p>Use test data</p>
				<p>Email: free@samuraijs.com</p>
				<p>Password: free</p>
			</div>
			<div className={s.inputWrapper}>
				<Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
			</div>
			<div className={s.inputWrapper}>
				<Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
			</div>
			<div className={s.checkboxWrapper}>
				<Field type={'checkbox'} name={'rememberMe'} component={Checkbox} /> remember me
			</div>
			<div>
				<button className={s.loginBtn}>Login</button>
			</div>
			{/*{error && <div className={s.formSummaryError}>{error}</div>}*/}
			<div>

			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
	const onSubmit = (formData: FormDataType) => {
		console.log(formData)
	}
	return <div className={s.header}>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}

export default Login;