import React from 'react';
import { TitleProp } from '../commonComponents/types';

export function HomeListItem(titleProp: TitleProp) {
    const {title} = titleProp

    return <>
        <label className='HomeListItem'>{title}</label>
    </>
}