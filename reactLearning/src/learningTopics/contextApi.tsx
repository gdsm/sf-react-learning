import React, {useContext} from 'react'
import { treeVariable } from '../home/home'

// Passing prop to child component bypassing middle components.
export default function ContextApi() {
    const variable = useContext(treeVariable)
    return <>
    <label>I am lower level component {variable}</label>
    </>
}