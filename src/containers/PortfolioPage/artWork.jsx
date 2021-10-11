import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Marginer } from "../../components/marginer";
import { PictureCard } from "../../components/pictureCard";
import PictureTwo from "../../images/Artwork/PictureTwo.jpg";
import PictureFour from "../../images/Artwork/PictureFour.jpg";
import PictureSix from "../../images/Artwork/PictureSix.jpg";
import PictureEight from "../../images/Artwork/PictureEight.jpg";
import PictureNine from "../../images/Artwork/PictureNine.jpg";
import Picture10 from "../../images/Artwork/Picture10.jpg";
import Picture11 from "../../images/Artwork/Picture11.jpg";
import Picture12 from "../../images/Artwork/Picture12.jpg";
import Picture13 from "../../images/Artwork/Picture13.jpg";
import Picture14 from "../../images/Artwork/Picture14.jpg";
import Picture15 from "../../images/Artwork/Picture15.jpg";
import Picture16 from "../../images/Artwork/Picture16.jpg";

const InnerPageContainer = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px; 
    width: 100%;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    min-height: 100%;
    margin-top: 5em;
    margin-left: 7em;
    margin-bottom: 5em;
    flex-direction: row;
    align-items: flex-start;
  

  
`;
const PictureContainer = styled.div`
    
    width: 13%;
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

const FavouriteContainer = styled.div`
    width: 100%;
    background-color:#f8dfdf;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-start;
`;

const FavWrapper = styled.div`
    flex-wrap:wrap;
    flex-direction: row;
    @media screen and (max-width: ${980}px) {
        display: block;
       flex-direction: row;
       justify-content: flex-start;
    }
`;



export function Artwork(props) {

    return <FavouriteContainer>
        <FavWrapper>
            <InnerPageContainer>
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureTwo} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureFour} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureSix} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureEight} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={PictureNine} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture10} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture11} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture12} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture13} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture14} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture15} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />
                <PictureContainer>
                    <PictureThumbnail>
                        <img src={Picture16} alt="Thamina Art Logo" />
                    </PictureThumbnail>
                </PictureContainer>
                <Marginer direction="horizontal" margin={150} />

            </InnerPageContainer>
        </FavWrapper>
    </FavouriteContainer>





    /* </FavouriteContainer>   const [offeredPics, setPics] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    const isArtworkEmpty = !offeredPics || (offeredPics && offeredPics.length === 0);
    
    const fetchArtwork = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/FavPics").catch(
            (err) => {
                console.log("Error: ", err);
            }
        );
    
        if (response) {
            setPics(response.data);
        }
        setLoading(false);
    
    };
    useEffect(() => {
        fetchArtwork();
    }, []);
    
    return <FavouriteContainer>
        <FavWrapper>
            {isArtworkEmpty && !isLoading && (
                <WarningText>No Pictures have been posted yet...Coming Soon! x </WarningText>
            )}
            {isLoading &&
                <WarningText>Art is Loading...</WarningText>}
            {!isArtworkEmpty &&
                !isLoading &&
                offeredPics.map((FavPics, idx) => (
                    <PictureCard key={idx} {...FavPics} />
                ))}
        </FavWrapper>
    
    
    
    </FavouriteContainer> */

}