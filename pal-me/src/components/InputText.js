import { Label } from 'recharts';
import styled from 'styled-components';
import '../additionalStyles.css'

const Input = styled.input`
    padding: 20px 15px;
    border-radius: 4px;
    border: 1px solid lightgray;
`

const InputText = ({label}) => {
  return <>
      <Label>{Label}</Label>
      <Input className="input-style" type="text"/>
  </>

};

export default InputText;
