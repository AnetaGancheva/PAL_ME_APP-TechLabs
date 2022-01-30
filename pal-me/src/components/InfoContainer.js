import styled from 'styled-components'
import {Images} from '../data'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: ${props => props.direction === 'right' ? "100%" : "70%"};
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 18%, 100% 0, 100% 82%, 0% 100%);
    padding: 5% 0;
    background-color: ${props => props.direction === 'right' ? "whitesmoke" : ""};
`
const TextContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between ;
    align-items: flex-start;
    margin: 0 3% ;
`
const Title = styled.h2`
    text-transform: uppercase;
    color: #464646
`
const Hr = styled.div`
    width: 55px;
    height: 4px;
    background-color: teal;
    margin: 3% 0;
`
const Desc = styled.p`
    color: #464646;
`

const ImgContainer = styled.div`
    flex: 2;
    position: relative;
    /* width: 100%; */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

`
const Img = styled.img`
    border-radius: 6px;
    display: block;
    margin: 0;
    padding: 0;
`
const PositonedImg = styled.img`
    display: block;
    border-radius: 6px;
    position: absolute;
    bottom: -10%;
    right: ${props => props.direction === "left" ?  "0" : "170px" };
    box-shadow: 0px 0px 15px 0px #cccccc;

    @media (max-width: 1120px) {
        width: 50%;
  }
` 
const InfoContainer = ({item}) => {
  return <Container>
            <Wrapper direction={item.direction}>
                {item.direction === "left" ? <><TextContainer>
                    <Title>{item.title}</Title>
                    <Hr/>
                    <Desc>{item.text}</Desc>
                </TextContainer>
                <ImgContainer>
                    <Img src={item.image}/>
                    <PositonedImg src={item.positionedImg} direction={item.direction}/>
                </ImgContainer> </> : <>
                <ImgContainer>
                    <Img src={item.image}/>
                    <PositonedImg src={item.positionedImg} direction={item.direction}/>
                </ImgContainer>
                <TextContainer>
                    <Title>{item.title}</Title>
                    <Hr/>
                    <Desc>{item.text}</Desc>
                </TextContainer>
                    </> }
            </Wrapper>
    </Container>
}

export default InfoContainer;
