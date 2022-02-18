import { GlobalContext } from '../Context'
import {useContext} from 'react';
//import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search'
import InputText from '../components/InputText';
import FormGroup from '../components/FormGroup';
import SelectInput from '../components/SelectInput';
import {Sports} from '../data'
//import map from '../images/map.png'
import {Navigate} from 'react-router'

/*const Image = styled.img`
  width: 100%;;
  border: teal dashed 2px;
  border-radius: 4px;
`
*/

const FindPlayers = () => {
  const {isValid} = useContext(GlobalContext)
  return <>
    <Navbar/>
    <Search  height='60vh'>
    <FormGroup title="Enter Post code" input={<InputText/>}/>
    <FormGroup title="sport(s)" input={<SelectInput options={Sports}/>}/>
    <FormGroup title="Gender" input={<SelectInput options={[{value: "female"}, {value : "male"}]}/>}/>
    <FormGroup title="age" input={<SelectInput options={[{value:"12-18"},{value:"Above 18"},{value:"18-25"},{value:"25-45"},{value:"Above 50"}]}/>}/>
    <FormGroup title="level" input={<SelectInput options={[{value:"Beginner"},{value:"Intermediate"},{value:"Advanced"}]}/>}/>
    </Search>
    { isValid ?  <Navigate to="/map" /> : ''}
    <Footer/>
  </>;
};

export default FindPlayers;
