import styled from "styled-components";


const Button = styled.button`
    background-color: teal;
    border: none;
    border-radius: 4px;
    height: 55px;
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
  return <Button>Search</Button>;
};

export default SearchButton;
