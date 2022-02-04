import React from 'react';
import Navbar from '../components/Navbar';
import Bar from '../components/Bar';
import InfoContainer from '../components/InfoContainer';
//import styled from 'styled-components';
import Footer from '../components/Footer';
import {ForPlayers} from '../data'
const Players = () => {

  return <>
  <Navbar />
  <Bar title={"Players"}/>
  {ForPlayers.map(item => <InfoContainer item={item}/>)}
    <Footer />
  </>
    
};

export default Players;
