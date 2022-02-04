import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search'
import InputText from '../components/InputText';
import FormGroup from '../components/FormGroup';
import SelectInput from '../components/SelectInput';
import {Sports} from '../data'

const FindClubs = () => {
  return <>
      <Navbar/>
    <Search>
        <FormGroup title="Enter Post code" input={<InputText/>}/>
        <FormGroup title="sport(s)" input={<SelectInput options={Sports}/>}/>
        <FormGroup title="sport(s)" input={<SelectInput options={[{value:"indoor"}, {value:"outdoor"}]}/>}/>
    </Search>
    <Footer/>
  </>;
};

export default FindClubs;
