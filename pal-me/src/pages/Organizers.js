import Bar from '../components/Bar';
import Footer from '../components/Footer';
import InfoContainer from '../components/InfoContainer';
import Navbar from '../components/Navbar';
import { ForOrganizers } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css'
import WOW from 'wowjs'
import React, {Component} from 'react'

class Organizers extends Component {
  componentDidMount(){
      new WOW.WOW().init();
  }
  render(){
    return(
      <div>
        <Navbar/>
        <div className="wow fadeIn" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn'}}>
          <Bar title={"Organizers"} />
          {ForOrganizers.map(item => <InfoContainer item={item}/>)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Organizers;

