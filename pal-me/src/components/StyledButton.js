import React from 'react';
import styled from 'styled-components'
const Button = styled.button`
    padding-top: 2.5% !important;
    padding-bottom: 2px !important;
    background-color: teal !important;
    border-radius: 4px !important;
    color: white !important;
    width: 140px !important;
    height: 50px !important;
    border: none !important;
    display: flex !important;
    justify-content: space-around !important;
    align-items: center !important;
    transition: all 0.5s ease-in-out !important;
    margin-right:  5% !important;
    cursor: pointer !important;

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
