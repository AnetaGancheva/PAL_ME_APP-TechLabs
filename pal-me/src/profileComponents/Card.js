// import { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: 2%;
    padding: 2%;
    width: 60%;
    border: teal 2px solid;
    border-radius: 4px;
    flex-direction: column;
`
// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     /* width: 70%; */
//     justify-content: center;
//     /* align-items: center; */
   
// `
const Title = styled.h2``

const Card = ({children, title}) => {
  return <Container>
            <Title>{title}</Title>
            {children}
  </Container>;
};

export default Card;
