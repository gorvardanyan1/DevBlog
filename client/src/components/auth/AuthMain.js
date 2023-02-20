import React, { useEffect } from 'react'
import { useContext } from 'react'
import { NavigationLinkContext } from '../blogs/Blogs'
const AuthMain = () => {
    const navigationLink = useContext(NavigationLinkContext)
    console.log(navigationLink);
    useEffect(function () {
        navigationLink.dispatch({ type: 'auth' })
    }, [])
    return (
        <div>ProfileComponent</div>
    )
}
export default AuthMain