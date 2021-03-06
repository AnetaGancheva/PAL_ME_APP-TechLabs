import { MdSend } from 'react-icons/md'
import styled from 'styled-components'
import newsPicture from '../images/soccer-field-football-background-green-court-pattern-lawn-148793775_smaller.png'
import '../additionalStyles.css'


const  Container =  styled.div`
    height: 60vh;
    background: url(${newsPicture});
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`  
    width: 50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 4px;
`

const Input = styled.input`
    border:none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color: teal;
    color: white;
    border-radius: 4px;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates for PAl-ME sports events, updates, bug fixes and more...</Desc>
            <InputContainer>
                <Input className="newsletter-style" placeholder='Your email'/>
                <Button>
                    <MdSend />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
