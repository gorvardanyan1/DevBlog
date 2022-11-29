import React from 'react'
import { Link } from 'react-router-dom'
const NavItemLink = ({ innerName }) => {
    const path = innerName === "home" ? "/" : "/" + innerName
    return (
        <li>
            <Link to={path.toLocaleLowerCase()}>{innerName}</Link>
        </li>
    )
}

export default NavItemLink