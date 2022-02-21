import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImg from '../images/register-background.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
    ),
    url(${backgroundImg})
        center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 50%;
    background-color: white;
    
    padding: 1% 3%;
    
    `
const Title = styled.h1`
        margin-left: 2%;
        font-size: 24px;
        font-weight: 400;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 1.5%;
    margin: 2%;
    min-width: 40%; 
`
const Agreement = styled.span`
    margin: 2%;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding:  2% 1%;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 1% 2%;

`

const StyledLink = styled(Link)`
    color: black;
    margin: 2% 0;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                     <Input placeholder='username'/>
                    <Input placeholder='first name'/>
                    <Input placeholder='last name'/>
                    <Input placeholder='email'/>
                    <Input placeholder='password'/>
                    <Input placeholder='confirm password'/>
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                    <StyledLink to="/">BACK TO HOME</StyledLink>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
