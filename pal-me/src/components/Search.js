import { GlobalContext } from '../Context'
import {useContext} from 'react';
import styled from 'styled-components';
import Button from './SearchButton'
import backgroundPhoto from "../images/Search_photo_transparent_3.png"


const Container = styled.div`
    width: 100%;
    height: ${props => props.validPostcode? "20vh" : props.height};
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
    justify-content: center;
`
const SubmitContainer = styled.div`
    align-self: center;
    margin-bottom: 3%;
`
const Search = ({children, height}) => {
    const {validPostcode} = useContext(GlobalContext)
  return (
      <Container validPostcode={validPostcode} height={height}>
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

