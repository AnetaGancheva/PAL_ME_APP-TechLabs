import { GlobalContext } from '../Context'
import {useContext} from 'react';
import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components';
import Pin from '../components/GoogleMapsPin.js'


const Container = styled.div`
height: 55.5vh;
width: 100%;
`



const Map = () => {
    const {lat, lon} = useContext(GlobalContext)
    return <>
        <Container>
            <GoogleMapReact bootstrapURLKeys={{key: process.env.REACT_APP_KEY}} center={{lat: lat, lng: lon}} defaultZoom={14}>
                <Pin lat={Number(lat)+0.0012} lng={Number(lon)+0.01} text={"John Doe\nFootball\nLooking for.."}/>
                <Pin lat={Number(lat)-0.0012} lng={Number(lon)+0.5} text={"Jane Doe\nJogging\nNew.."}/>
                <Pin lat={Number(lat)+0.0070} lng={Number(lon)-0.2} text={"John Doe\nFootball\nLooking for.."}/>
                <Pin lat={Number(lat)-0.0090} lng={Number(lon)+0.2} text={"Jane Doe\nTennis\nLooking for.."}/>
                <Pin lat={Number(lat)+0.058} lng={Number(lon)-0.8} text={"John Doe\nFootball\nPlease contact.."}/>
                <Pin lat={Number(lat)+0.0012} lng={Number(lon)+0.4} text={"Jane Doe\nBasketball\nLooking for.."}/>
            </GoogleMapReact>
        </Container>
    </>
}

export default Map