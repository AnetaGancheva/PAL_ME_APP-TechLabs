import styled from 'styled-components';
import {FaYoutube, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import palMeLogo from '../images/palMeLogo_103x50BW.png'

const Container = styled.div`
    display: flex;
    padding: 3% 5% ;
    background-color: rgb(0,64,64);
    color: white;
`
const Left = styled.div`
    flex: 1;
    display: flex;
  flex-direction: column;
  /* padding: 20px; */
`
const Logo = styled.div`
    background-image: url(${palMeLogo});
    height: 50px;
    width: 103px;
`

const Desc = styled.div`
    margin: 20px 0px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
  <Container>
      <Left>
            <Logo />
            <Desc>The only sports app you need in your life!</Desc>
            
      </Left>
      <Center>
            <Title>What you can do with palME:</Title>
            <List>
                 <ListItem>Find a Player</ListItem>
                 <ListItem>Find a Club</ListItem>
                 <ListItem>Find an Event</ListItem>
            </List>
      </Center>
      <Right>
            <Title>FOLLOW US</Title>
            <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FaFacebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <FaInstagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FaTwitter/>
                    </SocialIcon>
                    <SocialIcon  color="E60023">
                        <FaYoutube/>
                    </SocialIcon>
                </SocialContainer>
      </Right>
  </Container>)
};

export default Footer;
