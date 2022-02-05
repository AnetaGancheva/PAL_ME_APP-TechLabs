import React, {createContext, useState} from 'react'


export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
   
    //states
    // isLogged state for the showing a second navbar when the user logged in
    const [isLogged , setIsLogged] = useState(true)
    // dropdownMenu state for showing a dropdown menu when the user click on the down arrow in the navbar
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    // checked state for the radio button in the search component, which is on of the two options "player" or "clubs"
    const [isChecked, setIsChecked] = useState(true); 
    // dropdown select form for showing options for sports on find a player etc
    const[currentEmailId, setCurrentEMailId]=useState(null);

    // actions 
    const handleNavToggle = () => {
        setIsLogged((prevState) => !prevState )
    }

    // to show/hide 
    const handleDropdownMenu = () => {
        setShowDropdownMenu((prevState) =>  !prevState)
        console.log('ho')
    }

    // handle logout
    const handleLogout = () => {
        setIsLogged(false)
    }

    // handle toggle checked radio button on the search section
    const handleRadioChecked = () => {
        setIsChecked(prevState => !prevState)
    }

    const handleEmailSelection = (email_id) => {
        setCurrentEMailId(email_id);
    }

    return (<GlobalContext.Provider value={{
        isLogged,
        showDropdownMenu,
        isChecked,
        currentEmailId,
        handleRadioChecked,
        handleNavToggle,
        handleDropdownMenu,
        handleLogout,
        setCurrentEMailId
    } }>
        {children}
    </GlobalContext.Provider>)
}
