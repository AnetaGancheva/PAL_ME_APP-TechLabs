import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 10pt;
`

const Title = styled.h3`
    color: #000;
    margin: 0px 2px;
`

const SourceContainer = styled.a.attrs({
    target: "_blank"
})`
    color: #B2B2B2;
    text-decoration: none;
    margin: 0px 3px;
`

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Title>
                {props.title}
            </Title>
            <SourceContainer>
                {props.url}
            </SourceContainer>
        </HeaderWrapper>
    )
}

export default Header;