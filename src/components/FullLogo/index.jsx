import React from "react";
import styled from "styled-components";
import logoImg from "../../images/logo.png";
import { Marginer } from "../../components/marginer";

const FullLogoContainer = styled.div`
    display: flex;
    align-items: flex-start ;
    
`;

const LogoImageFull = styled.div`
    width: ${({ size }) => size ? size + "px" : "14em"};  
    height: ${({ size }) => size ? size + "px" : "9em"};  
    
    
    img{
        width: 100%;
        height: 100%;
    }
`;

export function FullLogo(props) {
    const { logoSize, textSize } = props
    return (
        <FullLogoContainer>
            <Marginer direction="vertical" margin={25} />
            <LogoImageFull size={logoSize}>
                <img src={logoImg} alt="Thamina Art Logo" />
            </LogoImageFull >

        </FullLogoContainer>
    );

}
