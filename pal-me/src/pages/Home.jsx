import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import bgImg from '../images/homebg.jpg'
import StyledButton from '../components/StyledButton'
import {FaApple, FaGooglePlay} from 'react-icons/fa'
import { GlobalContext } from '../Context'


const Container = styled.div`
    width: 100%;
    /* if user is Logged ,height will equal 100vh - (8vh)navbar height - (5vh)user navbar height*/
    height: ${props => props.isLogged ?  "87vh" : "92vh"};
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: red ;
`

const Wrapper = styled.div`
    background-color: blue ;
    /* width: 100%; */
    padding: 3%;
`
const Home = () => {

    const {isLogged} = useContext(GlobalContext)
    return (
        <>
            {/* <Register/> */}
            <Navbar/>
            <Container isLogged={isLogged}>
                <Wrapper>
                    <Desc>

                    </Desc>
                </Wrapper>


                
            </Container>
        </>
    )
}

export default Home
