import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 2%;
    margin: 2% 0;
    width: 50%;
`
const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
`

const InputText = ({label}) => {
  return <>
    <Label>{label}</Label>
    <Input type="text"/>
  </>
};

export default InputText;
