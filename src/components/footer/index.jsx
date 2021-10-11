import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";

const FooterContainer = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(239, 191, 189, 0.61);
    padding: 10px 3em;
    border-top: 3px solid #979696;

    @media screen and (max-width: 769px) {
        padding: 0;
        min-height: 40px;
        
  }
    
`;
const ConetntContainer = styled.div`
    display: flex;
    flex-direction:column;

`;

const RightContainer = styled.div`
    display: flex;
   
`;

const LefContainer = styled.div` 
    display: flex;
`;

const BottomContainer = styled.div`
    display: flex;
   
`;
const Title = styled.h5`
    margin: 0;
    margin-bottom: 8px;
    color: #5c5b5b;
    font-weight: 400;
    font-size:24; 
    font-style:italic;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size:10;
        font-weight: 200;
        margin-top:4px;
        margin-left: 20px;
  }

    
`;
const FLink = styled.a`
    text-decoration: none;
    font-style:italic;
    color: #000;
    font-weight: 500; 
    margin-left: 10px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-left:0;
        margin-top: 2px;
        
  }
    
`;
const PrivacyText = styled.h6`
    color: rgba(122, 122, 122, 0.637);
    font-size: 11px;
    margin:auto;
    margin-left: 10px;
    display: flex;
    align-items: center;
    margin-top: 9px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 7px;
        margin-left: 0px;
        
  }
`;
const DevText = styled.h6`
    color: rgba(122, 122, 122, 0.637);
    font-size: 11px;
    margin:auto;
    margin-left: 85px;
    display: flex;
    align-items: center;
    margin-top: 9px;

    @media screen and (max-width: 769px) {
        font-size: 8px;
        margin-right: 20px;
        
  }
`;

const SocialIcon = styled.div`  
    display: flex;
    flex-direction: row;        
    color: #5c5b5b;
    font-size: 20px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:not(:last-of-type){
        margin-right:10px;
    }

    &:hover{
        color:#f78484;
     }
`;

export function Footer(props) {

    return <FooterContainer>
        <LefContainer>
            <Title>Thamina Art</Title>
            <PrivacyText> &#169; All Rights Reserved, 2021 </PrivacyText>
        </LefContainer>
        <RightContainer>
            <FLink href="https://instagram.com/thamina.h?igshid=z9z69jeo76wg">
                <SocialIcon>
                    <Marginer direction="horizontal" margin={15} />
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialIcon>
            </FLink>
        </RightContainer>
        <BottomContainer>
            <DevText>Designed and Developed by MS Haque</DevText>
        </BottomContainer>
    </FooterContainer>

}