import React, { createContext, useReducer, useState } from 'react'

export const userContext = createContext()

const UserContext = ({ children }) => {
    function authReducerFunc(state, action) {
        switch (action.type) {
            case 'AUTH':
                return action.payload

            case 'SIGNOUT':
                return null
            default:
                return state
        }
    }
    const [authState, dispatch] = useReducer(authReducerFunc, null)
    return (
        <userContext.Provider value={[authState, dispatch]} >
            {children}
        </userContext.Provider>
    )
}

export default UserContext