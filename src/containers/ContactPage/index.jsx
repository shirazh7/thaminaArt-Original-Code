import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import logo from "../../images/logo.png";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";




const ThirdSectionContainer = styled.div`
    width: 100%;
    height: 100vh ;
    background-position: 0px;
    background-size: cover;
    background-color: #f8dfdf;
    align-items: center;
    justify-content: center; 

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
  }
    
`;


const ThirdSectionInnerContainer = styled.div`
    width: 100%;
    height: 91.5%;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
  }
`;

const QuoteCointainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 0px;
  
`;


const QuoteText = styled.h3`
    margin: 1px;
    line-height: 1.3;
    color: #000000;
    box-shadow: 0 0 1 rgb(255, 255, 255);
    font-weight: 600;
    font-size: 25px;
    font-style: normal;
    text-shadow: 0px 10px 30px #ffffff;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 20px;
        margin-top: 10px;
  }
   
`;
const PictureContainer = styled.div`
    display:flex;
    width: 20%;
    margin-left: 30px;
    box-shadow: 0px 0px 15px rgb(0,0,0);
    
    outline-width: 10px;
    outline-color: #f5baba;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 58%;
        margin-bottom:35px;
  }
    
`;


const PictureThumbnail = styled.div`
    width: 100%;
    height: 20em;
    

    img{
        width: 100%;
        height: 100%;
    }
`;



export function ContactPage(props) {

    return (
        <ThirdSectionContainer>
            <Navbar />
            <ThirdSectionInnerContainer>
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={logo} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={40} />
                <QuoteCointainer>
                    <QuoteText> &#9672; E-Mail: Thamina1042@hotmail.com</QuoteText>
                    <QuoteText> &#9672; Instagram: Thamina.h </QuoteText>

                </QuoteCointainer>
            </ThirdSectionInnerContainer>
            <Footer />
        </ThirdSectionContainer>

    );


}