import React from 'react'
import LogoDiv from './logo/LogoDiv'
import AnonNavigation from './navigation/AnonNavigation'
import Main from './main/Main'
const AnonmyusUi = () => {
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

export default AnonmyusUi