import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { ButtonThumb, StyledSlider } from "./MapSlider.styled";
import MindMapUnit from "../MindMapUnit/MindMapUnit";

function MapSlider({ cards }) {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 666,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const onSlideClick = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <StyledSlider ref={sliderRef} {...settings}>
                {cards.map((card, index) => (
                    <MindMapUnit
                        key={index}
                        unit={card}
                        slideOnClick={onSlideClick}
                    />
                ))}
            </StyledSlider>
            <ButtonThumb>
                <button type='button' onClick={handlePrevClick}>
                    Prev
                </button>
                <button type='button' onClick={handleNextClick}>
                    Next
                </button>
            </ButtonThumb>
        </>
    );
}

export default MapSlider;

MapSlider.propTypes = {
    cards: PropTypes.array.isRequired,
};
