import styled from 'styled-components';
import CoverPhoto from '../images/ball_30op.png'

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
const Bar = ({title}) => {
  return (<Container>
     <Title>...for <Span>{title}</Span></Title> 
  </Container>)
};

export default Bar;
