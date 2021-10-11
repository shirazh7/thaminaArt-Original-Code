import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar"
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
import blackNwhite from "../../images/blackNwhite.jpg";
import { Footer } from "../../components/footer";
import Slider from "../../components/ImageSlider/Slider";
import { SLiderData } from '../../components/ImageSlider/SliderData';




const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    
    
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: 45px;
    font-style: italic;
    color: #ffffff;
    align-items: center;
    text-shadow: 0px 0px 4px #e41f1f;

`;

const BackgroundFilter = styled.div`
    width: 100% ;
    height: 100% ;
    background-color: rgba(239, 191, 189, 0.61);
    display: flex;
    flex-direction: column;
    

`;
const MidSectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background-image: url(${blackNwhite});
    background-position: 0px -120px;
    background-size: cover;
    
    

    @media screen and (max-width: ${1672}px) {
        background-position: 0px 0px;
        
  }
`;



export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <Navbar />
            </TopSection>
            <Marginer direction="vertical" margin={0.9} />
            <MidSectionContainer>
                <BackgroundFilter>
                    <Title style={{ fontFamily: 'vivaldi' }} >Personal Favourites x</Title>

                    <Slider slides={SLiderData} />
                </BackgroundFilter>
            </MidSectionContainer>
            <Marginer direction="vertical" margin={2} />
            <Footer />
        </PageContainer>
    );
}