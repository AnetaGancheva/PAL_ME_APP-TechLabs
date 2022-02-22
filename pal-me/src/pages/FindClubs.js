import { GlobalContext } from '../Context'
import {useContext} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search'
import InputText from '../components/InputText';
import FormGroup from '../components/FormGroup';
import SelectInput from '../components/SelectInput';
import {Sports} from '../data'
//import map from '../images/map.png'
//import styled from 'styled-components';
//import {Navigate} from 'react-router'
import Map from './Map'

/*const Image = styled.img`
  width: 100%;;
  border: teal dashed 2px;
  border-radius: 4px;
`
*/

const FindClubs = () => {
  const {validPostcode} = useContext(GlobalContext)
  return <>
      <Navbar/>
    <Search  height='70vh'>
        <FormGroup title="Enter Post code" input={<InputText/>}/>
        <FormGroup title="sport(s)" input={<SelectInput options={Sports}/>}/>
        <FormGroup title="indoor/outdoor" input={<SelectInput options={[{value:"indoor"}, {value:"outdoor"}]}/>}/>
    </Search>
    { validPostcode ?  <Map /> : ''}
    <Footer/>
  </>;
};

export default FindClubs;
