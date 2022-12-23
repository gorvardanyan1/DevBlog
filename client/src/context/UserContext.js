import React, { createContext } from 'react'

export const userContext = createContext()

const UserContext = ({ children }) => {

    return (
        <userContext.Provider value={{ name: "Molo" }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext