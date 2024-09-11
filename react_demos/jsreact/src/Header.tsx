import React from "react"

type HeaderPropTypes = {title?:string}

const Header = ({title}:HeaderPropTypes): JSX.Element=>{
  return <header>{title?.toLowerCase()}</header>
}

export default Header