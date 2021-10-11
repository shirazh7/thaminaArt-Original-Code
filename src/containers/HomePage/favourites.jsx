import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import PictureOne from "../../images/Artwork/PictureOne.jpg";
import PictureThree from "../../images/Artwork/PictureThree.jpg";
import PictureFive from "../../images/Artwork/PictureFive.jpg";
import PictureSeven from "../../images/Artwork/PictureSeven.jpg";

const FavouriteContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
    
`;
const InnerContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    @media screen and (max-width: ${1220}px) {
        display: flex;        
  }
`;

const Title = styled.h1`
    font-weight: 300;
    font-size: 45px;
    font-style: italic;
    color: #ffffff;
    align-items: center;
    text-shadow: 0px 0px 4px #e41f1f;

`;

const FavWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
   
`;


const ViewMoreButton = styled(Button)`
    display: flex;
    width: 12%;
    background-color: #ffff;
    color: #000000;
    box-shadow: 0px 0px 7px rgb(0, 0, 0);
    justify-content:center;
    
`;

const BottomContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    
`;

const PictureContainer = styled.div`
    display:flex;
    ma
    width: 100%;
    box-shadow: 0px 0px 15px rgb(0,0,0);
    outline-style: ridge;
    outline-width: 13px;
    outline-color: #d8b1b1;
    
    
`;


const PictureThumbnail = styled.div`
    width: 100%;
    height: 30em;
    

    img{
        width: 100%;
        height: 100%;
    }
`;

export function Favourite(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <FavouriteContainer>
            {isMobile && (
                <BottomContainer>
                    <Title style={{ fontFamily: 'vivaldi' }} >Personal Favourites x</Title>

                </BottomContainer>
            )}

            <FavWrapper>

                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureOne} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureThree} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureFive} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureSeven} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>

            </FavWrapper>
            {!isMobile && (
                <BottomContainer>
                    <Marginer direction="vertical" margin={10} />
                    <Title style={{ fontFamily: 'vivaldi' }} >My Personal Favourites x</Title>
                    <ViewMoreButton size={15} >View My Portfolio</ViewMoreButton>
                </BottomContainer>
            )}
        </FavouriteContainer>
    );

}