//import { GlobalContext } from "../Context";
//import {useContext} from 'react';
import styled from 'styled-components';
import {MdPeopleAlt, MdPlace} from 'react-icons/md'
//import { type } from "@testing-library/user-event/dist/type";

const RadioContainer = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    background-color: teal;
    display: flex;
    justify-content: space-around;
`
const Input = styled.input`
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: none;
`

const RadioLabel = styled.label`
    margin: 0 3%;
    padding: 5px 10px;
    font-size: 1.2rem;
    color: white;
    flex:1;
    display: flex;
    justify-content: space-space-between;
    align-items: center;
    background-color: ${props => props.checked === "checked" ? '#4DB6AC' : 'transparent'};
    border-radius: 5px;
    cursor: pointer;
`

const RadioInput = () => {

    //const {isChecked, handleRadioChecked} = useContext(GlobalContext)

  return ( <RadioContainer>
      <Input type="radio" id="searchType1"  />
      <RadioLabel htmlFor="searchType1" checked="checked">
        <MdPeopleAlt/>PLAYERS
      </RadioLabel>
      <Input type="radio" id="searchType2"/>
      <RadioLabel htmlFor="searchType2">
        <MdPlace/>GAMES
      </RadioLabel>
    </RadioContainer> 
    )
};

export default RadioInput;
