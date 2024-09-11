import React, {useState, ChangeEvent} from 'react';
import { TitleProp } from './CommonTypes';
import './CommonTypes';
import './TextField.css'

export function EmailTextField(id: TitleProp) {
    const placeHolder = 'Enter email id'
    const {title} = id
    const [text, setText] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return <input className='TextField' type='email' id={title} value={text} placeholder={placeHolder} onChange={handleChange}>
    </input>
}

export default EmailTextField