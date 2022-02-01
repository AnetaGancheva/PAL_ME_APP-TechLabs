import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import img from '../images/app_2.png'
import StyledButton from '../components/StyledButton'
import {FaApple, FaGooglePlay} from 'react-icons/fa'
import { GlobalContext } from '../Context'
import Search from '../components/Search'
import RadioInput from '../components/RadioInput';
import InputText from '../components/InputText';
import FormGroup from '../components/FormGroup';
import SelectInput from '../components/SelectInput';
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Newsletter from '../components/NewsLetter'
import {Sports} from '../data'

const Container = styled.div`
    width: 100%;
    /* if user is Logged ,height will equal 100vh - (8vh)navbar height - (5vh)user navbar height*/
    height: ${props => props.isLogged ?  "43vh" : "50vh"};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
`

const Wrapper = styled.div`
    width:70%;
    height: 50%;
    /* padding: 3% 5%; */
    display: flex;
`
const InfoContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.h1`
    text-transform: capitalize;
`
const Desc = styled.div`
    margin-bottom: 10%;
    font-size: 1.2rem;
` 
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;

`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 60%;
   height: 90%;
`
const Home = () => {

    const {isLogged} = useContext(GlobalContext)
    return (
        <>
            <Navbar/>
            <Container isLogged={isLogged}>
                <Wrapper>
                    <InfoContainer>
                        <Title>Looking for someone to do activity with?</Title>
                        <Desc>
                            Look no further - palME is the right place for you! Do not hesitate to give it a try!
                        </Desc>
                        <ButtonsContainer>
                            <StyledButton appName="App Store" appSymbol={<FaApple/>}/>
                            <StyledButton appName="Google Play" appSymbol={<FaGooglePlay/>}/>
                        </ButtonsContainer>
                    </InfoContainer>
                    <ImgContainer>
                        <Img src={img} /> 
                    </ImgContainer>
                </Wrapper>
            </Container>
            <Search>
                <FormGroup title="I'm looking for..." input={<RadioInput/>}/>
                <FormGroup title="Enter Post code" input={<InputText/>}/>
                <FormGroup title="sport(s)" input={<SelectInput options={Sports}/>}/>
            </Search>
            <Slider/>
            <Newsletter />
            <Footer/>
        </>
    )
}

export default Home
