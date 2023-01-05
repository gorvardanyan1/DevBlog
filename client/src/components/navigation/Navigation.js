import React from 'react'

import NavItemLink from './NavItemLink'
import { v4 } from 'uuid'

const Navigation = ({ link, children }) => {
  return (
    <nav >
      <div className='navigationDiv'>
        <ul>
          {link.map(elem => {
            return <NavItemLink key={v4()} link={elem} />
          })}
          {children}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation