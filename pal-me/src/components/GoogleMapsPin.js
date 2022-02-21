//import PinIcon from '../images/pin.png'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../additionalStyles.css'

const Container = styled.div`
`

const IconText = styled.p`
    padding: 2px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid gray;
    width: 80px;
    height: 50px;

    $:hover{
    }
`

const Pin = ({text}) => {
    return <>
        <Container>
            <Icon icon={locationIcon} className="pin-icon" />
            <IconText className="pin-text" width="30px" height= "30px">{text}</IconText>
        </Container>
    </>
}

export default Pin