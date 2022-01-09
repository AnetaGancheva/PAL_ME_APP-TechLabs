import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImg from '../images/login-background.jpg'


const Container = styled.div`
    /* background-color: black; */
    background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.3)
    ), url(${backgroundImg})
      center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    background-color: #f7f7f7;
    width: 25%;
    padding: 3%;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 3%;
    margin: 3% 0;
    min-width: 40%;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding:  5%;
    background-color: #5c1c34;
    color: white;
    cursor: pointer;
    margin: 5% 0;
`
const StyledLink = styled(Link)`
    color: black;
    margin: 2% 0;
    `
const Login = () => {
    return (
        <Container>
           <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="userame"/>
                    <Input placeholder="password"/>
                    <Button>LOGIN</Button>
                    <StyledLink to="/forget-password">DO NOT YOU REMEMBER THE PASSWORD?</StyledLink>
                    <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
                </Form>
           </Wrapper>
        </Container>
    )
}

export default Login
