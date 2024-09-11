import React, {useState} from 'react'
import { SignUpProp } from './AccessManagementProps';
import { log } from '../commonComponents/Logger'
import './AccessManagement.css'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Firebase/Firebase'

export default function SignUpPage(signupProp: SignUpProp) {

    const navigate = useNavigate()

    const signupButtonTitle = signupProp.signupButtonTitle ?? "SignUp"
    const existinUserButtonTitle = signupProp.existingUserButtonTitle ?? "Existing user"

    const [emailValue, setEmailValue] = useState<string>("")
    const [passwordValue, setPasswordValue] = useState<string>("")

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        log("SignUpPage: handleEmailChange: ".concat(event.target.value))
        setEmailValue(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        log("SignUpPage: handlePasswordChange: ".concat(event.target.value))
        setPasswordValue(event.target.value)
    }

    const onSignUpButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        log("SignUpPage onSignUpButtonClick")
        createUser(emailValue, passwordValue)
    }

    const onExistinUserButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        log("SignUpPage onExistinUserButtonClick")
        navigate(-1)
    }

    return <form className='Form-Background'>
        <label>Enter email</label>
        <input className='Login-Input' type='email'  value={emailValue} onChange={handleEmailChange}></input>
        <label>Enter password</label>
        <input className='Login-Input' type='password' value={passwordValue} onChange={handlePasswordChange}></input>
        <button className='Login-Button' onClick={onSignUpButtonClick}>{signupButtonTitle}</button>
        <button className='Login-Button' onClick={onExistinUserButtonClick}>{existinUserButtonTitle}</button>
    </form>
}