import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import { HamburgerMenu } from "../hamburgerMenu";

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgba(255, 200, 200, 0.70);
    display: flex;
    justify-content: flex-end;
    padding : 17px;
    
    @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: flex-start;
  }

`;

const AccessibilityCointainer = styled.div`
    display:flex;
    align-items: center;
`;


const AnchorLink = styled.a`
    font-size: 17px;
    color: #6C3232;
    cursor: pointer;
    text-decoration:solid;
    outline: none;
    transition: all 200ms ease-in-out;
    padding-right: 0px;

    &:hover{
        filter:contrast(0.1);

    }

`;


const Seperator = styled.div`
    height: 90%;
    width: 1px;
    background-color: #ffff;
`;

export function Navbar(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <NavbarContainer>
            {!isMobile && (
                <AccessibilityCointainer>
                    <AnchorLink href="/">Home </AnchorLink>
                    <Marginer direction="horizontal" margin={10} />
                    <AnchorLink href="/about"> About </AnchorLink>
                    <Marginer direction="horizontal" margin={10} />
                    <AnchorLink href="/portfolio"> Portfolio </AnchorLink>
                    <Marginer direction="horizontal" margin={10} />
                    <AnchorLink href="/contact"> Contact </AnchorLink>
                    <Marginer direction="horizontal" margin={20} />
                </AccessibilityCointainer>
            )}

            {isMobile && (
                <HamburgerMenu />
            )}
        </NavbarContainer>
    );
}
