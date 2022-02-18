import styled from "styled-components";

const FooterWrapper = styled.div`
    padding: 4px 0px 0px 24px;
    font-size: 7pt;
    color: #B2B2B2;
    margin: 0;
`

const FooterLink = styled.a.attrs({
    target: "_blank"
})`
    color: #B2B2B2;
    text-decoration: none;
    margin: 0px 3px;
`


const Footer = (props) => {

    return (
        <FooterWrapper>
            {props.score} likes. Liked by 
            <FooterLink>{props.by}</FooterLink>
            |
            <FooterLink>{props.time}</FooterLink>
            |
            <FooterLink>View more</FooterLink>
        </FooterWrapper>
    )

}

export default Footer;