import { Label } from 'recharts';
import styled from 'styled-components';

const Input = styled.input`
    padding: 20px 15px;
    border-radius: 4px;
    border: 2px solid teal;

    $:focus {
        border: 2px outset teal !important;
        background-color: white;
    }

    $:active {
        border: 2px outset teal !important;
        background-color: white;
    }

    $:hover {
        border: 2px outset teal !important;
        background-color: rgb(228,242,227) !important;
    }
`

const InputText = ({label}) => {
  return <>
      <Label>{Label}</Label>
      <Input tabindex="1" type="text"/>
  </>

};

export default InputText;
