import React from 'react'
import { NavLink } from 'react-router-dom'
const NavItemLink = ({ link }) => {

    return (
        <li>
            <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : null} to={link.path}>{link.header}</NavLink>
        </li>
    )
}

export default NavItemLink