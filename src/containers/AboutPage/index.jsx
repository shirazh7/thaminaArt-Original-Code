import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import MyPicture from "../../images/Thani.jpg";
import quoteBack from "../../images/quoteBack.jpg";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";




const ThirdSectionInnerContainer = styled.div`
    width: 100%;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    
    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column;
  }
    

`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:space-between;
  
`;
const QuoteCointainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-right: 0;
  }
  
`;


const QuoteText = styled.h4`
    margin: 1px;
    line-height: 1.3;
    color: #ffffff;
    box-shadow: 0 0 1 rgb(255, 255, 255);
    font-weight: 500;
    font-size: 40px;
    font-style: normal;
    text-shadow: 0px 0px 3px #da2020;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 20px;

  }
    
    
   
`;
const PictureContainer = styled.div`
    display:flex;
    width: 20%;
    margin-left: 30px;
    box-shadow: 0px 0px 15px rgb(0,0,0);
    outline-style:double;
    outline-width: 10px;
    outline-color: #f5baba;


    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 50%;

  }
    
`;


const PictureThumbnail = styled.div`
    width: 100%;
    height: 30em;
    

    img{
        width: 100%;
        height: 100%;
    }
`;

const QuoteSectionContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${quoteBack});
    background-position: 0px 0px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        background-position: -450px 0px;
  }


`;


export function AboutPage(props) {
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <PageContainer>

            <QuoteSectionContainer>
                <Navbar />
                <ThirdSectionInnerContainer>
                    <PictureContainer>
                        <PictureThumbnail>
                            <img src={MyPicture} alt="Thamina Art Logo" />
                        </PictureThumbnail>
                    </PictureContainer>
                    <QuoteCointainer>
                        <Marginer direction="horizontal" margin={20} />
                        <QuoteText style={{ fontFamily: 'rageIta' }} > Thamina Haque </QuoteText>
                        {isMobile && <Marginer direction="vertical" margin={10} />}
                        <QuoteText style={{ fontFamily: 'rageIta' }}> Sixth Form student studying Media,</QuoteText>
                        <QuoteText style={{ fontFamily: 'rageIta' }}> Sociology & Fine Art x</QuoteText>

                    </QuoteCointainer>
                </ThirdSectionInnerContainer>
                <ContentContainer>

                    <QuoteText style={{ fontFamily: 'rageIta' }} > " An Ordinary Girl with an everyday life, </QuoteText>
                    <QuoteText style={{ fontFamily: 'rageIta' }}>  drawing her way through it x " </QuoteText>
                    <QuoteText> ~ TH </QuoteText>
                    <Marginer direction="vertical" margin={20} />
                </ContentContainer>
                <Marginer direction="vertical" margin={70} />
            </QuoteSectionContainer>
            <Footer />
        </PageContainer >


    );


}