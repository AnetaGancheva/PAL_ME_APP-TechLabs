import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({ loggedIn: false });

    const handleLogin = (user) => {
         const {username, firstname, lastname, email} = user
        setUser({
            loggedIn:true,
            username,
            firstname,
            lastname,
            email
        })
    }
    const handleLogout = () => {
        setUser({ loggedIn: false })
    }
    return (<UserContext.Provider value={{
        user, 
        setUser,
        handleLogin,
        handleLogout 
    }}>
        {children}
    </UserContext.Provider>)
}