import StoryList from '../components/StoryList.js'
import {stories} from '../data';
import Navbar from '../components/Navbar';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-color: teal;
    background-image: linear-gradient( to top, rgba(255,255,255,0.2), rgba(255,255,255,0.4));
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
`
const Span = styled.span`
    font-size: 3rem ;
`

const Newsfeed = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Title><Span>Latest news:</Span></Title> 
            </Container>
            <StoryList items={stories} /> 
        </>
    )
}

export default Newsfeed