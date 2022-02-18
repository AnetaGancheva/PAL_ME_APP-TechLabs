import StoryList from '../components/StoryList.js'
import CoverPhoto from '../images/ball_30op.png'
import {stories} from '../data';
import Navbar from '../components/Navbar';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-color: teal;
    background-image: url(${CoverPhoto});
    background-size: cover;
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