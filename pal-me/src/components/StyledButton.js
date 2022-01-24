import React from 'react';
import styled from 'styled-components'
const Button = styled.button`
    background-color: teal;
    border-radius: 4px;
    color: white;
    width: 140px;
    height: 50px;
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.5s ease-in-out;
    margin-right:  5%;
    cursor: pointer;

    &:hover{
        transform: translateY(-4px) ;
    }

   
`

const StyledButton = ({appName, appSymbol}) => {
  return <Button>
      <p style={{textAlign: 'center', fontWeight:'bold', fontSize:"25px"}}>{appSymbol}</p>  
      <p>Get it Free at 
        <span style={{display:"block", fontWeight: 'bold'}}>{appName}</span></p>  
      </Button>;
};

export default StyledButton;
