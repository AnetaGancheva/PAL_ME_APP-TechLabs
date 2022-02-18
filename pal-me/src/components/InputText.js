import styled from 'styled-components';
import '../additionalStyles.css'
import { GlobalContext } from '../Context'
import {useContext} from 'react';

const Input = styled.input`
    padding: 16px 15px;
    border-radius: 4px;
    border: ${props => props.error !== '' ? '1px solid red' : '1px solid lightgray'};
`
const Error = styled.p`
   color: white;
   background-color: red;
   border-radius: 4px;
   padding: 0 1%;
   width: 70%
` 

const InputText = () => {
  const {handlePostcodeInput, error} = useContext(GlobalContext)
  
  return <>
      <Input className="input-style" type="text" onChange={(e) => handlePostcodeInput(e)} error={error}/>
      {error ? <Error>{error}</Error> : ''}
      <Error/>
  </>

};

export default InputText;
