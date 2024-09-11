import React, {useState} from 'react'
import { ForgotPasswordProp } from './AccessManagementProps'
import './AccessManagement.css'
import { log } from '../commonComponents/Logger'

export default function ForgotPasswordPage(forgotPasswordProp: ForgotPasswordProp) {

    const sendButtonTitle = forgotPasswordProp.sendButtonTitle ?? "Login"

    const [emailValue, setEmailValue] = useState<string | undefined>(forgotPasswordProp.prefilledEmail)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        log("LoginPage: handleEmailChange: " + event.target.value)
        setEmailValue(event.target.value)
    }

    const onSendButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        log("LoginPage: onSendButtonClick")
    }

    return <form className='Form-Background'>
        <label>Enter email</label>
        <input className='Login-Input' type='email' value={emailValue} onChange={handleEmailChange}></input>
        <button className='Login-Button' onClick={onSendButtonClick}>{sendButtonTitle}</button>
    </form>
}