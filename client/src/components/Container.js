import React, { useEffect } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { userContext } from '../context/UserContext';
import { useContext } from 'react'
import AnonmyusUi from './AnonmyusUi'
import UserUi from './UserUi';
import { auth } from '../firbaseConfig/firbaseAuth';
console.log(auth.currentUser);
const Container = () => {
    const [authState, dispatch] = useContext(userContext)
    useEffect(function () {
        auth.currentUser && dispatch({
            type: 'AUTH',
            payload: auth.currentUser
        })
    }, [])

    return (
        <Router>
            <div className='container'>
                <button onClick={() => console.log(auth.currentUser)}>StaateNow</button>
                {authState ? <UserUi /> : <AnonmyusUi />}
            </div>
        </Router>
    )
}

export default Container
