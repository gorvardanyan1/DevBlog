import React from 'react'
import { useContext } from 'react'
import { NavigationLinkContext } from '../blogs/Blogs'
const AuthMain = () => {
    const navigationLink = useContext(NavigationLinkContext)
    console.log(navigationLink);
    return (
        <div>ProfileComponent</div>
    )
}

export default AuthMain