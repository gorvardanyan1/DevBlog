import React from 'react'
import '../../style/nav.style.scss'
import NavItemLink from './NavItemLink'

const Navigation = () => {

  return (
    <nav >
      <div className='navigationDiv'>

        <ul>
          <NavItemLink innerName={"home"} />
          <NavItemLink innerName={"contact"} />
          <NavItemLink innerName={"blogs"} />
        </ul>
      </div>

    </nav>
  )
}

export default Navigation