import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginPageProp } from './AccessManagementProps';
import { log } from '../commonComponents/Logger'
import { onLogin } from '../Firebase/Firebase'
import './AccessManagement.css'


export function LoginPage(loginProp: LoginPageProp) {
    const navigate = useNavigate();

    const loginButtonTitle = loginProp.loginButtonTitle ?? "Login"
    const forgotPasswordTitle = loginProp.forgotPasswordTitle ?? "Forgot password"
    const newUserButtonTitle = loginProp.newUserButtonTitle ?? " New User"

    const [emailValue, setEmailValue] = useState<string>(loginProp.prefilledEmail)
    const [passwordValue, setPasswordValue] = useState<string>("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        log("LoginPage: handleEmailChange: ".concat(event.target.value))
        setEmailValue(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        log("LoginPage: handlePasswordChange: ".concat(event.target.value))
        setPasswordValue(event.target.value)
    }

    const onLoginClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        log("LoginPage: onLoginClick:")
        onLogin(emailValue, passwordValue)
    }

    const onForgotClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        log("LoginPage Forgot password button clicked")
        navigate('/forgotPasswordPage')
    };

    const onNewUserClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        log("LoginPage New User button clicked.")
        navigate('/signUpPage');
    };

    return <form className='Form-Background'>
        <label>Enter email</label>
        <input className='Login-Input' type='email' value={emailValue} onChange={handleEmailChange}></input>
        <label>Enter password</label>
        <input className='Login-Input' type='password' value={passwordValue} onChange={handlePasswordChange}></input>
        <button className='Login-Button' onClick={onLoginClick}>{loginButtonTitle}</button>
        <button className='Login-Button' onClick={onForgotClick}>{forgotPasswordTitle}</button>
        <button className='Login-Button' onClick={onNewUserClick}>{newUserButtonTitle}</button>
    </form>
}

export default LoginPage