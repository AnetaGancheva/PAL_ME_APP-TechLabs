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

const PasswordInput = ({label}) => {
  return <>
    <Label>{label}</Label>
    <Input type="password"/>
  </>
};

export default PasswordInput;
