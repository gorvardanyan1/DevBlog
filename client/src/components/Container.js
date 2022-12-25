import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingUi from './LendingUi'

const Container = () => {
    return (
        <Router>
            <Routes>
                <Route index path='/*' element={<div className='container'>
                    <LandingUi />
                </div>} />
                <Route path='/blogs' element={
                    <div>Blogs</div>
                } />
            </Routes>
        </Router>
    )
}
export default Container
