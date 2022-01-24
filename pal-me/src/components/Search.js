import React from 'react';
import styled from 'styled-components';
import Button from './SearchButton'
import RadioInput from './RadioInput';
import InputText from './InputText';
import FormGroup from './FormGroup';
import SelectSport from './SelectSport';

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const SubmitContainer = styled.div`
    align-self: flex-end;
    margin-bottom: 3%;
`
const Search = () => {
  return (
      <Container>
          <Wrapper>
            <FormGroup title="I'm looking for..." input={<RadioInput/>}/>
            <FormGroup title="Enter Post code" input={<InputText/>}/>
            <FormGroup title="sport(s)" input={<SelectSport/>}/>
            <SubmitContainer>
                <Button type="submit"/>
            </SubmitContainer> 
          </Wrapper>
      </Container>
  )
  }

export default Search;

