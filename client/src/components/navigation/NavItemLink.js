import React from 'react'
import { Link } from 'react-router-dom'
const NavItemLink = ({ link }) => {

    return (
        <li>
            <Link to={link.path}>{link.header}</Link>
        </li>
    )
}

export default NavItemLink