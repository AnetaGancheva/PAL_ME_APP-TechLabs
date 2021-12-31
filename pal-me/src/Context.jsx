import React, {createContext, useState} from 'react'


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
   
    //states
    const [isLogged , setIsLogged] = useState(false)

    // actions 
    const handleNavToggle = () => {
        setIsLogged((prevState) => !prevState )
    }

    return (<GlobalContext.Provider value={{
        isLogged,
        handleNavToggle
    } }>
        {children}
    </GlobalContext.Provider>)
}
