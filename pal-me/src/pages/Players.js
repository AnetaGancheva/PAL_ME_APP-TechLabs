import Navbar from '../components/Navbar';
import Bar from '../components/Bar';
import InfoContainer from '../components/InfoContainer';
//import styled from 'styled-components';
import Footer from '../components/Footer';
import {ForPlayers} from '../data'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'
import WOW from 'wowjs'
import React, {Component} from 'react'

class Players extends Component {
  componentDidMount(){
      new WOW.WOW().init();
  }
  render(){
    return(
      <div>
        <Navbar/>
        <div className="wow fadeIn" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'}}>
          <Bar title={"Players"} />
          {ForPlayers.map(item => <InfoContainer item={item}/>)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Players;
