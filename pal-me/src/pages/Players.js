import React from 'react';
import Navbar from '../components/Navbar';
import Bar from '../components/Bar';
import InfoContainer from '../components/InfoContainer';
//import styled from 'styled-components';
import Footer from '../components/Footer';
import {ForPlayers} from '../data'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'
import { WOW } from 'wowjs'

var Wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
Wow.init();

const Players = () => {

  return <>
  <Navbar />
  <div className="wow fadeInUp">
    <Bar title={"Players"}/>
    {ForPlayers.map(item => <InfoContainer item={item}/>)}
  </div>
  <Footer />
  </>
    
};

export default Players;
