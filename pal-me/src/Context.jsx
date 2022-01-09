import React, {createContext, useState} from 'react'


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
   
    //states
    // isLogged state for the showing a second navbar when the user logged in
    const [isLogged , setIsLogged] = useState(false)
    // dropdownMenu state for showing a dropdown menu when the user click on the down arrow in the navbar
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)

    // actions 
    const handleNavToggle = () => {
        setIsLogged((prevState) => !prevState )
    }

    // to show/hide 
    const handleDropdownMenu = () => {
        setShowDropdownMenu((prevState) =>  !prevState)
        console.log('ho')
    }

    return (<GlobalContext.Provider value={{
        isLogged,
        showDropdownMenu,
        handleNavToggle,
        handleDropdownMenu
    } }>
        {children}
    </GlobalContext.Provider>)
}
