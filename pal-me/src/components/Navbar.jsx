import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {MdOutlineAccountCircle, MdArrowDropDown} from "react-icons/md"
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

    &:hover {
        background-color: #1e1d1d;
    }
` 
const DropdownMenu = styled.div`
    display: ${props => (props.showMenu && !props.isLogged) ? 'block' : 'none'};
    position: absolute;
    right: 15px;
    z-index: 1;
    background-color: black;
    color: white;
    width: 160px;

    ${NavLink} {
        display: block;
       padding: 10px 11px;
    }
`
const Hr = styled.div`
    background-color: #eee;
    height: 0.1px;
`
const DropdownUserMenu = styled.div`
    display: ${props => props.isLogged && props.showMenu? 'block' : 'none'};
    position: absolute;
    right: 15px;
    z-index: 1;
    background-color: black;
    color: white;
    width: 160px;

    ${NavLink} {
        display: block;
       padding: 10px 11px;
    }
`
const Navbar = () => {

    const {isLogged, showDropdownMenu, handleDropdownMenu, handleLogout} = useContext(GlobalContext)
  
    console.log(showDropdownMenu)
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
                        <NavButton onClick={handleDropdownMenu}>
                            <MdOutlineAccountCircle style={{display: isLogged ? 'inline' : 'none' }}/>
                            <MdArrowDropDown style={{display: isLogged ? 'none' : 'inline' }} />
                        </NavButton>
                        <DropdownMenu showMenu={showDropdownMenu} isLogged={isLogged}>
                            <NavLink to="/login">Login</NavLink>
                            <Hr />
                            <NavLink to="/register">Create An Account</NavLink>
                        </DropdownMenu>
                        <DropdownUserMenu showMenu={showDropdownMenu} isLogged={isLogged}>
                            <NavLink to="/profile">Profile</NavLink>
                            <Hr />
                            <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
                        </DropdownUserMenu>

                    </Right>          
            </Container>
            {isLogged ? <UserNavbar isLogged={isLogged}/> : <UserNavbar />}
       </> 
        
    )
}

export default Navbar
