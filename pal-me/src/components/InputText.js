import { Label } from 'recharts';
import styled from 'styled-components';

const Input = styled.input`
    padding: 20px 15px;
    border-radius: 4px;
    border: none;
`

const InputText = ({label}) => {
  return <>
      <Label>{Label}</Label>
      <Input type="text"/>
  </>

};

export default InputText;
