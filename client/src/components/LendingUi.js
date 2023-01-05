import React from 'react'
import LogoDiv from './logo/LogoDiv'
import Main from './main/Main'
import Navigation from './navigation/Navigation'
import '../style/nav.style.scss'
const LandingUi = () => {
    const link = [{
        header: 'home',
        path: '/'
    },
    {
        header: 'contact',
        path: 'contact'
    },
    {
        header: 'blogs',
        path: 'blogs'
    }]
    return (
        <>
            <LogoDiv />
            <div className='mainContainer'>
                <Navigation link={link} />
                <Main />
            </div>
        </>
    )
}

export default LandingUi