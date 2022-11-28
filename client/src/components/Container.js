import React from 'react'
import LogoDiv from './logo/LogoDiv'
import Navigation from './navigation/Navigation'
import Main from './main/Main'


///

import { app, auth, provider, googlePopUp } from '../firbaseConfig/firbaseAuth'
// async function handleEsimInch() {
//     const user = await googlePopUp(auth, provider)
//     console.log(user.user.email);
// }

const Container = () => {
    return (
        <div className='container'>
            <LogoDiv />
            <div className='mainContainer'>
                <Navigation />
                <Main />
            </div>
        </div>
    )
}

export default Container
