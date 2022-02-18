import styled from "styled-components";
import { GlobalContext } from '../Context'
import {useContext} from 'react';


const Button = styled.button`
    background-color: teal;
    border: none;
    border-radius: 4px;
    height: 60px;
    padding: 0px 30px;
    font-size: 1.2rem;
    color: white;
    font-weight: 400;
    cursor: pointer;

     &:active{
      transform: translateY(5px);
    }
`
const SearchButton = () => {
  const {handleSubmit} = useContext(GlobalContext)
  return <Button  onClick={() => handleSubmit()}>Search</Button>;
};

export default SearchButton;
