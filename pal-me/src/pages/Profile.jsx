import styled from 'styled-components';
import Card from '../profileComponents/Card'
//import TextInput from '../profileComponents/TextInput';
import PasswordInput from '../profileComponents/PasswordInput';
import SelectInput from '../profileComponents/SelectInput'
import SubmitButton from '../profileComponents/SubmitButton';
import {Sports} from '../data'
import Navbar from '../components/Navbar';

const Container = styled.div`
    background-color: #ebe6e5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Profilepic = styled.div`
  width: 188px;
  height: 188px;
  margin-right: 38px;
  background: #e48307;
  /* border-radius: 8px; */
  background-image: url("https://i.pravatar.cc/300");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 4px;
`

const Profile1 = () => {
  return (
      <>
        <Navbar/>
        <Container>
         <Card title="Profile Picture">
             <Profilepic/>
            <SubmitButton text="Edit Photo"/>
        </Card>
        <Card title="About">
        <SelectInput options={[{value:"12-18"},{value:"Above 18"},{value:"18-25"},{value:"25-45"},{value:"Above 50"}]} label="age"/>
            <SelectInput options={[{value: "female"}, {value : "male"}]} label="Gender"/>
            <SelectInput options={[{value:"Beginner"},{value:"Intermediate"},{value:"Advanced"}]} label="Level"/>
            <SelectInput options={Sports} label="favorite sport"/>
            <SubmitButton text="save"/>
        </Card>
        <Card title="Password">
            <PasswordInput label="Please enter your old password"/>
            <PasswordInput  label="enter your new password"/>
            <PasswordInput  label="confirm your new password"/>
            <SubmitButton text="save"/>
        </Card>
    </Container>
      </>
      

  )
};

export default Profile1;
