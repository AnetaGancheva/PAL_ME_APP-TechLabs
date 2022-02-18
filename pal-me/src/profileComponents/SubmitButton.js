import styled from "styled-components";

const Button = styled.button`
    width: 20%;
    border: none;
    padding:  1%;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 1% 0;
    border-radius: 4px;
`

const SubmitButton = ({text}) => {
  return <Button>{text}</Button>;
};

export default SubmitButton;
