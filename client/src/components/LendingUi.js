import React from 'react'
import LogoDiv from './logo/LogoDiv'
import AnonNavigation from './navigation/LandingNavigation'
import Main from './main/Main'

const LandingUi = () => {
    return (

        <>
            <LogoDiv />
            <div className='mainContainer'>
                <AnonNavigation />
                <Main />
            </div>
        </>

    )
}

export default LandingUi