import styled from 'styled-components';
import {FaYoutube, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
const Container = styled.div`
    display: flex;
    padding: 3% 5% ;
    background-color: black;
    color: white;
`
const Left = styled.div`
    flex: 1;
    display: flex;
  flex-direction: column;
  /* padding: 20px; */
`
const Logo = styled.h1``

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
            <Logo>PAL ME</Logo>
            <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</Desc>
            
      </Left>
      <Center>
            <Title>Useful Links</Title>
            <List>
                 <ListItem>Home</ListItem>
                 <ListItem>FIND A PLAYER</ListItem>
                 <ListItem>FIND A CLUB</ListItem>
                 <ListItem>FIND AN EVENT</ListItem>
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
