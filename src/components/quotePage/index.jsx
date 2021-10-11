import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import MyPicture from "../../images/Thani.jpg";




const ThirdSectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background-position: 0px -50px;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.315);
    align-items: center;
    justify-content: space-around; 
    
`;


const ThirdSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around; 
`;

const QuoteCointainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
  
`;


const QuoteText = styled.h1`
    margin: 1px;
    line-height: 1.3;
    color: #ffffff;
    box-shadow: 0 0 1 rgb(255, 255, 255);
    font-weight: 500;
    font-size: 60px;
    font-style: italic;
    text-shadow: 0px 0px 15px rgb(0,0,0);
   
`;
const PictureContainer = styled.div`
    display:flex;
    width: 20%;
    margin-left: 30px;
    box-shadow: 0px 0px 15px rgb(0,0,0);
    outline-style:double;
    outline-width: 10px;
    outline-color: #f5baba;
    
`;


const PictureThumbnail = styled.div`
    width: 100%;
    height: 30em;
    

    img{
        width: 100%;
        height: 100%;
    }
`;



export function ThirdSection(props) {

    return (
        <ThirdSectionContainer>
            <ThirdSectionInnerContainer>
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={MyPicture} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <QuoteCointainer>
                    <Marginer direction="horizontal" margin={20} />
                    <QuoteText style={{ fontFamily: 'rageIta' }} > " An Ordinary Girl with an </QuoteText>
                    <QuoteText style={{ fontFamily: 'rageIta' }}> everyday life, drawing </QuoteText>
                    <QuoteText style={{ fontFamily: 'rageIta' }}> her way through </QuoteText>
                    <QuoteText style={{ fontFamily: 'rageIta' }}> it x " </QuoteText>
                    <QuoteText> ~ TH </QuoteText>
                </QuoteCointainer>
            </ThirdSectionInnerContainer>
        </ThirdSectionContainer>

    );


}