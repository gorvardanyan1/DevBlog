import React from 'react'
import '../../style/main.style.scss'
import { useContext } from 'react'
import { userContext } from '../../context/UserContext'
const UserMain = () => {
    const [state, dispatch] = useContext(userContext)
    return (
        <>
            <main className='anonMain'>
                <img src={state.user.photoURL} alt="User Photo" style={{ width: "200px", height: "200px" }} />
                <h1>{state.user.email}</h1>
            </main>
        </>
    )
}

export default UserMain