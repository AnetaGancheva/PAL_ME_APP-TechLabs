import PinIcon from '../images/pin.png'
import styled from 'styled-components'

const PinSize = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${PinIcon});
`

const Pin = () => {
    return <>
        <PinSize />
    </>
}

export default Pin