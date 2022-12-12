import React from 'react'

import { BrowserRouter as Router, Navigate } from 'react-router-dom'
import LandingUi from './LendingUi'




const Container = () => {


    return (
        <Router>
            <div className='container'>

                <LandingUi />

            </div>
        </Router>
    )
}

export default Container
