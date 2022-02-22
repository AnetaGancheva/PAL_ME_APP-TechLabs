import styled, { css } from 'styled-components'
//import {Images} from '../data'
import infoPattern from '../images/seamless-sports-pattern-background_98292-4294_smaller.png'

const Container = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const WrapperBackground =
    css`
        background: url(${infoPattern});
`

const Wrapper = styled.div`
    ${props => (props.direction==='right' ? WrapperBackground : "background:'';")};
    width: ${props => props.direction === 'right' ? "100%" : "70%"};
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 18%, 100% 0, 100% 82%, 0% 100%);
    padding: 5% 0;
    @media (max-width: 1120px) {
        padding: 10% 0;
  }
`
const TextContainer = styled.div`
    flex: 2 !important;
    display: flex !important; 
    flex-direction: column !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    margin: 0 3% !important;
`
const Title = styled.h2`
    text-transform: uppercase !important;
    color: #464646 !important;
`
const Hr = styled.div`
    width: 55px !important;
    height: 4px !important;
    background-color: teal !important;
    margin: 3% 0 !important;
`
const Desc = styled.p`
    color: #464646 !important;
`

const ImgContainer = styled.div`
    flex: 2 !important;
    position: relative !important;
    /* width: 100%; */
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    justify-content: center !important;

`
const Img = styled.img`
    border-radius: 6px !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
`
const PositonedImg = styled.img`
    display: block !important;
    border-radius: 6px !important;
    position: absolute !important;
    bottom: -10% !important;
    right: ${props => props.direction === "left" ?  "0" : "170px" } !important;
    box-shadow: 0px 0px 15px 0px #cccccc !important;

    @media (max-width: 1120px) {
        width: 50% !important;
  }
` 
const InfoContainer = ({item}) => {
  return <Container className="wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>
            <Wrapper direction={item.direction}>
                {item.direction === "left" ? <><TextContainer>
                    <Title>{item.title}</Title>
                    <Hr/>
                    <Desc>{item.text}</Desc>
                </TextContainer>
                <ImgContainer>
                    <Img className="wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}} src={item.image}/>
                    <PositonedImg className="wow fadeInUp"  data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}} src={item.positionedImg} direction={item.direction}/>
                </ImgContainer> </> : <>
                <ImgContainer>
                    <Img className="wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}} src={item.image}/>
                    <PositonedImg className="wow fadeInUp"  data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}} src={item.positionedImg} direction={item.direction}/>
                </ImgContainer>
                <TextContainer>
                    <Title className="wow fadeInUp"  data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeIn'}}>{item.title}</Title>
                    <Hr/>
                    <Desc className="wow fadeInUp"  data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>{item.text}</Desc>
                </TextContainer>
                    </> }
            </Wrapper>
    </Container>
}

export default InfoContainer;
