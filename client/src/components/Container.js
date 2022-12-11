import React from 'react'

import { BrowserRouter as Router, Navigate } from 'react-router-dom'

import AnonmyusUi from './AnonmyusUi'


const Container = () => {


    return (
        <Router>
            <div className='container'>

                <AnonmyusUi />

            </div>
        </Router>
    )
}

export default Container
