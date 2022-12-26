import React from 'react'
import LogoDiv from './logo/LogoDiv'
import Main from './main/Main'
import Navigation from './navigation/Navigation'
import '../style/nav.style.scss'
const LandingUi = () => {
    return (
        <>
            <LogoDiv />
            <div className='mainContainer'>
                <Navigation link={['home', 'contact', 'blogs']} />
                <Main />
            </div>
        </>
    )
}

export default LandingUi