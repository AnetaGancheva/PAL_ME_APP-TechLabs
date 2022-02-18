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
    // state for postcode in the text input
    const [postcodeInput, setPostcodeInput] = useState('')
    // for invalid inputs 
    const [error, setError]  = useState('')
    const [isValid, setIsValid]  = useState(false)

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

    // to handle the text input when the user enter a post code
    const handlePostcodeInput = (e) => {
        setPostcodeInput(e.target.value)
    }

    const handleSubmit = () => {
        const regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/
        if (postcodeInput.match(regex)){
            setIsValid(true)
            setError('')
        } else {
            setError("Please Enter A Valid Postcode ")
            setIsValid(false)
        }
    }
    return (<GlobalContext.Provider value={{
        isLogged,
        showDropdownMenu,
        isChecked,
        currentEmailId,
        postcodeInput,
        error,
        isValid,
        handlePostcodeInput,
        handleRadioChecked,
        handleNavToggle,
        handleDropdownMenu,
        handleLogout,
        setCurrentEMailId,
        handleSubmit
    } }>
        {children}
    </GlobalContext.Provider>)
}
