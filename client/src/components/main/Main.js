import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../../style/main.style.scss'
import About from './About'
import Contact from './Contact'


const Main = () => {

  return (
    <main>

      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </main>
  )
}

export default Main