import React from 'react'
import '../style/nav.style.scss'
import Navigation from './navigation/Navigation'
import '../style/main.style.scss'
import { useContext } from 'react'
import { userContext } from '../context/UserContext'
import UserMain from './main/UserMain'
const UserUi = () => {
 
    return (
        <div className='mainAnonContainer'>
            <Navigation />
            <UserMain />
        </div>
    )
}

export default UserUi