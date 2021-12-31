import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalContext } from '../Context'
import { GoSignOut} from "react-icons/go";


const Container = styled.div`
    height: ${props => props.isLogged ?  '5vh' : '0' };
    overflow: hidden;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 1%;
    font-size: 0.9rem;
` 
const Left = styled.h2`
    flex:1;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    margin: 0 1%;
`

const NavButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: white;
    font-size: 1.2rem;
    padding: 1% 0;
` 

const UserNavbar = ({isLogged}) => {

    const {handleNavToggle} = useContext(GlobalContext)

    return (
       <Container isLogged={isLogged}>
            <Left>
                Welcome, Username
            </Left>
            <Right>
                <NavLink to="" >Account</NavLink>
                <NavLink to="/" >Messages</NavLink>
                <NavLink to="/" >Dashboard</NavLink>
                <NavButton onClick={() => handleNavToggle()}><GoSignOut/></NavButton>
            </Right>
        </Container>
    )
}

export default UserNavbar
