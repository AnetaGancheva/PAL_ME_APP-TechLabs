import React from 'react';
import styled from 'styled-components';
import Button from './SearchButton'
import backgroundPhoto from "../images/Search_photo_transparent_3.png"

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background: url(${backgroundPhoto});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const SubmitContainer = styled.div`
    align-self: flex-end;
    margin-bottom: 3%;
`
const Search = ({children}) => {
  return (
      <Container>
          <Wrapper>
           {children}
            <SubmitContainer>
                <Button type="submit"/>
            </SubmitContainer> 
          </Wrapper>
      </Container>
  )
  }

export default Search;

