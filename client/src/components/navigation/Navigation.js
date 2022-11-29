import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { userContext } from '../../context/UserContext'
import { auth } from '../../firbaseConfig/firbaseAuth'
import NavItemLink from './NavItemLink'

const AnonNavigation = () => {
    const [state, dispatch] = useContext(userContext)
    function handleSignOut() {
        signOut(auth).then(() => dispatch({ type: "SIGNOUT" }))
            .catch(err => console.log(err))
    }

    return (
        <nav>
            <div className='navigationDiv'>
                <ul>
                    <NavItemLink innerName={'blogs'} />
                </ul>
            </div>
            <div className='signDiv'>
                <button onClick={handleSignOut} className="signOut" role="button"><span className="text">Sign Out</span></button>
            </div>
        </nav>
    )
}

export default AnonNavigation