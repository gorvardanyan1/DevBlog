import React, { createContext, useReducer, useState } from 'react'

export const userContext = createContext()

const UserContext = ({ children }) => {

    return (
        <userContext.Provider >
            {children}
        </userContext.Provider>
    )
}

export default UserContext