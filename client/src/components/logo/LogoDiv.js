import React from 'react'
import LogoImg from './LogoImg'
import logo from '../../images/logo.svg'
const LogoDiv = () => {
    return (

        <div className='logoDiv'>
            <div className='backgroundDiv'></div>
            <LogoImg srcPath={logo} altImg='Logo' />
        </div >

    )
}

export default LogoDiv