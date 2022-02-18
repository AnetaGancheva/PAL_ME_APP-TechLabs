import { GlobalContext } from '../Context'
import {useContext} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components';
import Pin from '../components/GoogleMapsPin.js'

const Container = styled.div`
height: 100vh;
width: 100%;
`



const Map = () => {
    const {lat, lon} = useContext(GlobalContext)
    return <>
        <Navbar />
        <Container>
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyAQMRO8Nk_Hti4sYqB_dHesQvPxnQ-OF5o'}} center={{lat: lat, lng: lon}} defaultZoom={4}>
                <Pin lat={Number(lat)+0.0012} lng={Number(lon)+0.01} />
            </GoogleMapReact>
        </Container>
        <Footer />
    </>
}

export default Map