import Navbar from '../components/Navbar';
import styled from "styled-components";
import FormGroup from '../components/FormGroup';
import ProfileEditPhoto from '../images/racetrack.png';
import SelectInput from '../components/SelectInput';
import {Sports} from '../data';
import InputText from '../components/InputText';

const Profilepic = styled.div`
  width: 120px;
  height: 115px;
  margin-right: 38px;
  background: #e48307;
  /* border-radius: 8px; */
  margin: auto;
  background-image: url("https://i.pravatar.cc/300");
  background-repeat: no-repeat;
  background-size: cover;
`

const Main = styled.div`
  position: relative;
  background-image: url(${ProfileEditPhoto});
  margin: auto;
`

const Hr = styled.hr`
  border: 1px solid #333;
`

const FlexContainer = styled.div`
  position: relative;
  display: flex;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100%;
  width: 100%;

  @media (max-width: 1440px) {
    grid-template-columns: 25% 75%;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
`

const Card = styled.div`
  background-size: cover;
  background-position: center;
  margin: 6px;
  width: 100%;
  border-radius: 1px;
`

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
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-color: teal;
    background-image: linear-gradient( to right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.7)
    );
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
`
const Span = styled.span`
    font-size: 3rem ;
`

const Profile =() => {
    return (
        <>
        <Navbar />
        <Main>
            <Container>
                <Title><Span>Edit profile</Span></Title> 
            </Container>
          <Hr />
          <FlexContainer>
            <CardContainer>
              <Card>
                <Profilepic />
                <Button>Change profile picture</Button>
              </Card>
              <Card>
              <Form>
                    <Title>Change password:</Title>
                    <FormGroup title="Please type in your old password" input={<InputText/>}/>
                    <FormGroup title="Enter your new password" input={<InputText/>}/>
                    <FormGroup title="Confirm new password" input={<InputText/>}/>
                    <Button>Save</Button>
              </Form>
              <Form>
              <FormGroup title="Favourite Sport" input={<SelectInput options={Sports}/>}/>
              <FormGroup title="Gender" input={<SelectInput options={[{value: "female"}, {value : "male"}]}/>}/>
              <FormGroup title="Age" input={<SelectInput options={[{value:"12-18"},{value:"Above 18"},{value:"18-25"},{value:"25-45"},{value:"Above 50"}]}/>}/>
              <FormGroup title="Level" input={<SelectInput options={[{value:"Beginner"},{value:"Intermediate"},{value:"Advanced"}]}/>}/>
              <Button>Save</Button>
              </Form>
              </Card>
            </CardContainer>
          </FlexContainer>
        </Main>
        </>
      )
}

export default Profile