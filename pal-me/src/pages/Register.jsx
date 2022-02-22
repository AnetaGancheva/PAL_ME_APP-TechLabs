import React,{useState} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import backgroundImg from '../images/register-background.jpg'
import {BiError} from 'react-icons/bi'
import {MdDone} from 'react-icons/md'


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
const SuccessContainer = styled.div`
    width: 30%;
    background-color: white;
    border-radius: 4px;
    padding: 1%;
    display: ${props => props.success ? "flex" : "none" };
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : #3ba03e;
    position: absolute;
    top: 100px;
`
const Wrapper = styled.div`
    width: 50%;
    background-color: white;
    border-radius: 4px;
    padding: 1% 3%;
    display: ${props => props.success ? "none" : "block" };
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
const Error = styled.div`
display: block;
    /* display: ${props => props.error ? "block" : "none"}; */
    background-color: rgb(255, 0, 0,0.3);
    color: #B82525;
    padding: 2%;
    margin: 2%;
    min-width: 40%;
    border-radius: 4px;
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
    border-radius: 4px;
`

const StyledLink = styled(Link)`
    color: black;
    margin: 2% 0;
`

const Register = () => {
    // states 
    const [username, setUsername] = useState('') 
    const [firstname, setFirstname] = useState('') 
    const [lastname, setLastname] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [confirmedPassword, setConfirmedPassword] = useState('') 
    // Error state to show the error message that the api (the developer wrote )sent in case smth went wrong with the body
    const [error, setError] = useState('')
    // Success state to show a success banner after the user competer the form successfully 
    const [success, setSuccess] = useState(false)

  

    // Actions
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }

    const handleLastname = (e) => {
        setLastname(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleComfirmedPassword= (e) => {
        setConfirmedPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username,
                firstname,
                lastname,
                email,
                password,
                confirmedPassword
            })
        }
        // wwhen the user click the create button, a fetch function will use an api to connect to the backend
        try {
            const response = await fetch('http://localhost:5000/api/register', requestOptions)
            const data = await response.json()
            if (response.status === 201) {
                setUsername('')
                setFirstname('')
                setLastname('')
                setEmail('')
                setPassword('')
                setConfirmedPassword('') 
                setSuccess(true)
            } else {
                setError(data)
            }
        
        } catch (error) {
            console.log(error.message)
        }
    }

    
    return (
        <Container>
            <SuccessContainer success={success}>
                <MdDone style={{borderRadius: "50%", width:"100px", height:"80px", backgroundColor : "#4CB050", color: "white", display:"block", margin: "2%"}}/>
                <p>Thank you!<br/>
                You will receive an email in the email address you used to sign up confirming that your account has been successfully created.</p>
                <StyledLink to="/" style={{color:"#3ba03e",fontWeight: "400", textDecoration:"underline", alignSelf:"flex-start"}}>BACK TO HOME</StyledLink>
                <StyledLink to="/login" style={{color:"#3ba03e",fontWeight: "400", textDecoration:"underline", alignSelf:"flex-start"}}>LOG IN</StyledLink>
            </SuccessContainer>
            <Wrapper success={success}>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" onChange={(e) => {handleUsername(e)}} placeholder='username'/>
                    <Input type="text" onChange={(e) => {handleFirstname(e)}} placeholder='first name'/>
                    <Input type="text" onChange={(e) => {handleLastname(e)}} placeholder='last name'/>
                    <Input type="text" onChange={(e) => {handleEmail(e)}} placeholder='email'/>
                    <Input type="password" onChange={(e) => {handlePassword(e)}} placeholder='password'/>
                    <Input type="password" onChange={(e) => {handleComfirmedPassword(e)}} placeholder='confirm password'/>
                    {error ? <Error error={error}><BiError/> {error}</Error> : ''}
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleSubmit}>Create</Button>
                    <StyledLink to="/">BACK TO HOME</StyledLink>
                    <StyledLink to="/login">LOG IN</StyledLink>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
