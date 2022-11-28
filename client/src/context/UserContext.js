import React, { createContext, useReducer } from 'react'
export const userContext = createContext()

const initialAuth = { auth: false }

function authReducer(state, action) {
    switch (action.type) {
        case "AUTH":
            return { auth: !state.auth }

        default:
            return state
    }
}
const UserContext = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialAuth)
    return (
        <userContext.Provider value={[authState, dispatch]} >
            {children}
        </userContext.Provider>
    )
}

export default UserContext