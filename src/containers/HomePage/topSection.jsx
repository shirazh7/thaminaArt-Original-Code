import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/BrandLogo";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";
import TopSectionBackgroundImg from "../../images/landing-page2.jpg";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 753px;
    background-image: url(${TopSectionBackgroundImg});
    background-position: 0px -50px;
    background-size: cover;
    @media screen and (max-width: ${1217}px) {
        height: 700px;
        background-position: 0px 0px ;
  }
    @media screen and (max-width: ${767}px) {
        height: 700px;
        background-position: -310px 0px ;
  }
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;

`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
`;


const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
  
`;

const SloganText = styled.h1`
    margin: 0;
    line-height: 1.3;
    color: #ffffff;
    font-weight: 500;
    font-size: 90px;
    text-shadow: 0px 0px 15px rgb(0, 0, 0);

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 60px;
    
  }
  @media screen and (max-width: 370px) {
        font-size: 40px;
    
  }
   
`;


export function TopSection(props) {
    const { children } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo />
                        <SloganText style={{ fontFamily: 'vivaldi' }} > Welcome to My </SloganText>
                        <SloganText style={{ fontFamily: 'vivaldi' }}> Portfolio... </SloganText>
                        <Marginer direction="vertical" margin={80} />
                    </LogoContainer>
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    );
}