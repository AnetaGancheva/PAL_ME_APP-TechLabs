import styled from 'styled-components';
import {MdStar} from 'react-icons/md'

const RatingContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
const Text = styled.p`
font-style: italic;
color: #464646;
`
const Author = styled.p`
font-weight: 600;
color: #464646;
text-transform: capitalize;
`
const Review = ({text, author}) => {
  return (
      <>
        <RatingContainer>
            <MdStar style={{color:"#FFB520", fontSize: "1.7rem"}}/>
            <MdStar style={{color:"#FFB520", fontSize: "1.7rem"}}/>
            <MdStar style={{color:"#FFB520", fontSize: "1.7rem"}}/>
            <MdStar style={{color:"#FFB520", fontSize: "1.7rem"}}/>
            <MdStar style={{color:"#FFB520", fontSize: "1.7rem"}}/>
        </RatingContainer>
        <Text>{text}</Text>
        <Author>{author}</Author>
      </>
    
  )
};

export default Review;
