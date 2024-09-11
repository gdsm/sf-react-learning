import {TitleProp} from './types'
import './navigationHeaderBlack.css';

export function NavigationHeader(props: TitleProp) {
    const {title} = props
    return <header className='NavigationHeaderBackground'>     
            <label className='NavigationTitle'>{title}</label>
        </header>
}