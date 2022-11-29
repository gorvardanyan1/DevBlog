import React from 'react'
import '../../style/main.style.scss'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import SignUp from './SignUp'
import SignIn from './SignIn'
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/in' element={<SignIn />} />
        <Route path='/up' element={<SignUp />} />
      </Routes>


    </main>
  )
}

export default Main