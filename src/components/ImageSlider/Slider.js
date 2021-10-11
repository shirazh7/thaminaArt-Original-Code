import React, { useState } from 'react';
import { SLiderData } from './SliderData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }




    return (
        <section className="slider">

            <FaArrowLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowRight className="right-arrow" onClick={nextSlide} />

            {SLiderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key=
                        {index} >
                        {index === current && (
                            <img src={slide.image} alt="Fav Pics" className="image" />)}


                    </div>
                )
            })}
        </section>
    );

};

export default Slider;
