import styled from 'styled-components';
import { useState } from 'react';
import { MdKeyboardArrowLeft , MdKeyboardArrowRight} from 'react-icons/md';
import Review from './Review';
import {Reviews} from '../data'


const Container = styled.div`

    width: 100%;
    height: 20vh;
    display: flex;
    /* justify-content: center; */
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    color: white;
    width: 50px;
    height: 50px;
    background-color: teal;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === 'left' && "10%"};
    right: ${props => props.direction === 'right' && "10%"};
    margin: auto;
    cursor: pointer;
    z-index: 2
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 20vh;
`
const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: #464646;
    margin: 3% auto;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0
        )
    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
      <>
      <Title>SEE WHAT PEOPLE ARE SAYING</Title>
      <Container> 
      <Arrow direction="left"  onClick={() => handleClick("left")}><MdKeyboardArrowLeft/></Arrow>
      <Wrapper slideIndex={slideIndex}>
            {Reviews.map(item => (
                <Slide>
                    <Review text={item.text} author={item.auhor}/>
                </Slide>
            ))}
          
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}><MdKeyboardArrowRight/></Arrow>
 </Container>
      </>
  
  )
};

export default Slider;
