import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Artwork } from "./artWork";
import { PageContainer, } from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

const Title = styled.h1`
    margin: 0;
    line-height: 0.8;
    color: #000000;
    font-weight: 500;
    font-size: 55px;
    font-style: normal;
    text-decoration:none;
    text-shadow: 0px 0px 2px #e45454;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin:5px;
        font-size:43px;
       
  }
    
   
`;
const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  min-height: 70vh;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  
`;

const BackgroundFilter = styled.div`
    width: 100% ;
    height: 100% ;
    background-color: #ffd7d7;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${281}px) {
        width: 100%;
    }
    

`;

export function PortfolioPage(props) {
    return (
        <PageContainer>

            <BackgroundFilter>
                <Navbar />
                <Marginer direction="vertical" margin={13} />
                <Title style={{ fontFamily: 'vivaldi' }} >My Portfolio</Title>
                <InnerPageContainer>
                    <Artwork />
                </InnerPageContainer>
            </BackgroundFilter>
            <Footer />
        </PageContainer>

    );
}