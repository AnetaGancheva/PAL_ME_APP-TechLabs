import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 1%;
    margin: 1% 0;
    width: 50%;
    border-radius: 4px;
`
const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
`

const TextInput = ({label}) => {
  return <>
    <Label>{label}</Label>
    <Input type="text"/>
  </>
};

export default TextInput;
