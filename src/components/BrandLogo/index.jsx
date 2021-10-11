import React from "react"
import styled from "styled-components";
import logoImg from "../../images/logo_transparent_cropped.png";


const BrandLogoContainer = styled.div`
    display: flex;
    align-items: flex-start ;
    
`;

const LogoImage = styled.div`
    width: ${({ size }) => size ? size + "px" : "23em"};  
    height: ${({ size }) => size ? size + "px" : "14em"};  
    
    img{
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 380px) {
        width:15em;
        height:10em;
    
  }

`;

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => size ? size + "px" : "10px"};
    color: #ffff;
    font-weight: 600;
    
`;

export function BrandLogo(props) {
    const { logoSize, textSize } = props
    return (
        <BrandLogoContainer>
            <LogoImage size={logoSize}>
                <img src={logoImg} alt="Thamina Art Logo" />
            </LogoImage>

        </BrandLogoContainer>
    );

}

