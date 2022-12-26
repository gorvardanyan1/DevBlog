import React from 'react'

import NavItemLink from './NavItemLink'
import { v4 } from 'uuid'
const Navigation = ({ link }) => {
  return (
    <nav >
      <div className='navigationDiv'>
        <ul>
          {link.map(elem => {
            return <NavItemLink key={v4()} innerName={elem} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation