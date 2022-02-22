import {useState,useContext} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import backgroundImg from '../images/login-background.jpg'
import { UserContext } from '../UserContext'
import { useLocation, useNavigate } from "react-router";
import { Navigate} from "react-router-dom";



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
    border-radius: 4px;
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
    border : ${props => props.error || props.errorUsername || props.errorPassword ? "solid 1px red" : '' };
    padding: 3%;
    margin: 3% 0;
    min-width: 40%;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding:  5%;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 1% 0;
    border-radius: 4px;
`
const StyledLink = styled(Link)`
    color: black;
    margin: 2% 0;
    
`
const Error = styled.p`
  background-color: rgb(255, 0, 0,0.3);
    color: #B82525;
   border-radius: 4px;
   padding: 0 1%;
   /* width: 70%; */
` 

const Login = () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 

     // Error state to show the error message that the api (the developer wrote )sent in case smth went wrong with the body
     const [error, setError] = useState('')
    //  Error if the username is wrong
    const [errorUsername, setErrorUsername] = useState('')
     //  Error if the password is wrong
     const [errorPassword, setErrorPassword] = useState('')
    // For the user when login
    const { user, handleLogin } = useContext(UserContext);


    // useNavigate user programetically ,it's the same exact thing as Navigate component but instead of component it's a hook
    const navigate = useNavigate();
    // useLocation because we attached in protectedRoutes page state={{from: location}} in Naviagte component so we still have to attach the location to useNaviaget hook
    const location = useLocation();
    console.log(location)

     const handleUsername = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username,
                password
            })
        }

         // wwhen the user click the create button, a fetch function will use an api to connect to the backend
         try {
                const response = await fetch('http://localhost:5000/api/login', requestOptions)
                const data = await response.json()
                if (username === '' || password === ''){
                    setError("Please Enter your username and password")
                    
                } else if (data === "Wrong User Name!")  {
                    setErrorUsername(data)
                    setError('')
                 } else if  (data === "Wrong credentials!"){
                    setErrorPassword("Password is incorrect")
                    setError('')
                } else {
                        setError('')
                    }
                if (response.status === 200) {
                    if (user.loggedIn) return;
                    handleLogin(data);
                    setUsername('')
                    setPassword('')
                    setError('')
                    setErrorUsername('')
                    setErrorPassword('')

                    console.log(location)
                    if (location.state?.from) {
                    navigate(location.state.from);
                 
                }
                } 

               
            } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
        {user.loggedIn ? <Navigate to="/" state={{from: location}} replace/> : '' }
        <Container>
           <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input type="text" onChange={(e) => {handleUsername(e)}} placeholder="userame" error={error} errorUsername={errorUsername}/>
                    {errorUsername ? <Error>{errorUsername}</Error> : ''}
                    {/* <Error /> */}
                    <Input type="password" onChange={(e) => {handlePassword(e)}} placeholder="password" error={error} errorPassword={errorPassword}/>
                    {errorPassword ? <Error>{errorPassword}</Error> : ''}
                    <Error>{error}</Error>
                    <Button onClick={handleSubmit}>LOGIN</Button>
                    <StyledLink to="/forget-password">DO NOT YOU REMEMBER THE PASSWORD?</StyledLink>
                    <StyledLink to="/register">CREATE A NEW ACCOUNT</StyledLink>
                    <StyledLink to="/">BACK TO HOME</StyledLink>
                </Form>
           </Wrapper>
        </Container>
        
        
        </>
    )
}

export default Login
