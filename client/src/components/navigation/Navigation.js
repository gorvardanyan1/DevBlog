import React from 'react'
import '../../style/nav.style.scss'
import NavItemLink from './NavItemLink'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav >
      <div className='navigationDiv'>
        <ul>
          <NavItemLink innerName={"Home"} />
          <NavItemLink innerName={"Contact"} />
          <NavItemLink innerName={"Blogs"} />
        </ul>
      </div>
      <div className='signDiv'>
        <Link to='/in'><span>Sign In</span></Link>
        <Link to='/up'><span>Sign Up</span></Link>
      </div>
    </nav>
  )
}

export default Navigation