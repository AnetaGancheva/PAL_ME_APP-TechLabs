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
    width: 100% !important;
    height: ${props => props.isLogged ?  "43vh" : "50vh"} !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 2% 0 !important;
`

const Wrapper = styled.div`
    width:70% !important;
    height: 50% !important;
    display: flex !important;
`
const InfoContainer = styled.div`
    flex:1 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
`
const Title = styled.h1`
    text-transform: capitalize;
    font-weight: 2em !important;
`
const Desc = styled.div`
    margin-bottom: 10% !important;
    font-size: 1.2rem !important;
` 
const ButtonsContainer = styled.div`
    display: flex !important;
    justify-content: flex-start !important;

`
const ImgContainer = styled.div`
    flex: 1 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`
const Img = styled.img`
    width: 60% !important;
   height: 90% !important;
`


const Home = () => {

    const {isLogged} = useContext(GlobalContext)
    return (
        <>
            <Navbar/>
            <div className="wow fadeInUp">
                <Container isLogged={isLogged} >
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
                <Search height='40vh'>
                    <FormGroup title="I'm looking for..." input={<RadioInput/>}/>
                    <FormGroup title="Enter Post code" input={<InputText/>}/>
                    <FormGroup title="sport(s)" input={<SelectInput options={Sports}/>}/>
                </Search>
                <Slider/>
                <Newsletter />
            </div>
            <Footer/>
        </>
    )
}

export default Home
