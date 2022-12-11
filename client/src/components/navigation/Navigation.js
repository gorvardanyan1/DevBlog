
import React from 'react'


const AnonNavigation = () => {

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