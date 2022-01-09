import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {MdViewHeadline} from "react-icons/md"
import {MdOutlineAccountCircle} from "react-icons/md"
import UserNavbar from './UserNavbar'
import { GlobalContext } from '../Context'


const Container = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 1;
    height: 8vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items:center;
    padding: 0 1%;
    // font-size: 0.9rem;
` 
const Left = styled.div``

const Logo = styled.h1``
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    list-style-type: none;
    flex:2;
    `
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    margin: 0 3%;
`
const Right = styled.div`

    // margin-right: 2%;
    font-size: 2rem;
    position: relative;
`
const NavButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: white;
    width: 100%;
    font-size: 1.8rem;
` 
const DropDownMenu = styled.ul`
    display: none;
    position: absolute;
    z-index: 1;
`
const Navbar = () => {

    const {isLogged, handleNavToggle} = useContext(GlobalContext)
  
    return (
       <>
            <Container>
                <Left>
                    <Logo>PAL ME</Logo>
                </Left>
                    <Center>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/findPlayer">Find a player</NavLink>
                        <NavLink to="/findGame">Find a game</NavLink>
                        <NavLink to="/Clubs and Venues">Find a player</NavLink>
                        <NavLink to="/Clubs and Venues">Find a player</NavLink>
                    </Center>
                    <Right>
                        <NavButton onClick={handleNavToggle}>
                            <MdOutlineAccountCircle />
                        </NavButton>
                        <DropDownMenu>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Create An Account</NavLink>
                        </DropDownMenu>
                    </Right>          
            </Container>
            {isLogged ? <UserNavbar isLogged={isLogged}/> : <UserNavbar />}
       </> 
        
    )
}

export default Navbar
