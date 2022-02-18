import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../additionalStyles.css'


const Container = styled.div`
    height: ${props => props.isLogged ?  '5vh' : '0' };
    overflow: hidden;
    background-color: teal;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) );
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
    align-items: left;
`
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    margin: 0 1%;

    &:hover {
    }
`
const HooverNavLink = styled.span`
    
`

/*const NavButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: white;
    font-size: 1.2rem;
    padding: 1% 0;
` 
*/

const UserNavbar = ({isLogged}) => {

    return (
       <Container isLogged={isLogged}>
            <Left>
                Welcome, Username
            </Left>
            <Right>
                <NavLink to="/messages"><HooverNavLink className="navbar-link">Messages</HooverNavLink></NavLink>
                <NavLink to="/newsfeed"><HooverNavLink className="navbar-link">News</HooverNavLink></NavLink>
            </Right>
        </Container>
    )
}

export default UserNavbar
