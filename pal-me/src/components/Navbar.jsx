import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {MdOutlineAccountCircle, MdArrowDropDown} from "react-icons/md"
import UserNavbar from './UserNavbar'
import { UserContext } from '../UserContext'
import { GlobalContext } from '../Context'
import palMeLogo from '../images/palMeLogo_103x50BW.png'
import '../additionalStyles.css'


const Container = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 1;
    height: 8vh;
    background-image: linear-gradient(
      rgb(0,64,64),
      teal
    );
    /*background-color: rgb(0,64,64);*/
    color: white;
    display: flex;
    justify-content: space-around;
    align-items:center;
    padding: 0 1%;
    // font-size: 0.9rem;
` 
const Left = styled.div``

const Logo = styled.div`
    background-image: url(${palMeLogo});
    height: 50px;
    width: 103px;
`

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
    text-align: right !important;
    &:hover {
        color: white;
    }
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
    }
` 
const DropdownMenu = styled.div`
    display: ${props => (props.showMenu && !props.loggedIn) ? 'block' : 'none'};
    position: absolute;
    right: 15px;
    z-index: 1;
    background-color: rgb(0,64,64);
    color: white;
    width: 110px;
    border-radius: 4px;  
 

    ${NavLink} {
        display: block;
       padding: 10px 11px;

       &:hover {
        font-weight: bold;
        color: white;
    }

    }
`
const Hr = styled.div`
    background-color: #eee;
    height: 0.1px;
`
const DropdownUserMenu = styled.div`
    display: ${props => props.loggedIn && props.showMenu? 'block' : 'none'};
    position: absolute;
    right: 15px;
    z-index: 1;
    background-color: rgb(0,64,64);
    color: white;
    width: 110px;
    border-radius: 4px;   

    ${NavLink} {
        display: block;
       padding: 10px 11px;

       &:hover {
    }

    }
`

const HooverNavLink = styled.span`
    
`

const Navbar = () => {

    const {showDropdownMenu, handleDropdownMenu} = useContext(GlobalContext)
    //for the user when login
    const { user, handleLogout} = useContext(UserContext);
  
    return (
       <>
            <Container>
                <Left>
                   <Link to="/"><Logo /></Link>
                </Left>
                    <Center>
                        <NavLink to="/" ><HooverNavLink className="navbar-link">Home</HooverNavLink></NavLink>
                        <NavLink to="/findplayer"><HooverNavLink className="navbar-link">Find a Player</HooverNavLink></NavLink>
                        <NavLink to="/findclub"><HooverNavLink className="navbar-link">Find a Club</HooverNavLink></NavLink>
                        <NavLink to="/players"><HooverNavLink className="navbar-link">Information for Players</HooverNavLink></NavLink>
                        <NavLink to="/organizers"><HooverNavLink className="navbar-link">Information for Organizers</HooverNavLink></NavLink>
                    </Center>
                    <Right>
                        <NavButton onClick={handleDropdownMenu}>
                            <MdOutlineAccountCircle className="circle-icon-link" style={{display: user.loggedIn ? 'inline' : 'none' }}/>
                            <MdArrowDropDown className="arrow-icon-link" style={{display: user.loggedIn ? 'none' : 'inline' }} />
                        </NavButton>
                        <DropdownMenu showMenu={showDropdownMenu} loggedIn={user.loggedIn}>
                            <NavLink to="/login"><HooverNavLink className="navbar-link">Login</HooverNavLink></NavLink>
                            <Hr />
                            <NavLink to="/register"><HooverNavLink className="navbar-link">Create An Account</HooverNavLink></NavLink>
                        </DropdownMenu>
                        <DropdownUserMenu showMenu={showDropdownMenu} loggedIn={user.loggedIn}>
                            <NavLink to="/profile"><HooverNavLink className="navbar-link">Profile</HooverNavLink></NavLink>
                            <Hr />
                            <NavLink to="/" ><HooverNavLink className="navbar-link" onClick={handleLogout}>Logout</HooverNavLink></NavLink>
                        </DropdownUserMenu>

                    </Right>          
            </Container>
            {user.loggedIn ? <UserNavbar loggedIn={user.loggedIn}/> : <UserNavbar />}
       </> 
        
    )
}

export default Navbar
