import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { ButtonThumb, StyledSlider } from "./CollectSlider.styled";
import CollectionUnit from "../CollectionUnit/CollectionUnit";

function CollectSlider({ photos }) {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 666,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
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
                {photos.map((unit, index) => (
                    <CollectionUnit
                        key={index}
                        unit={unit}
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

export default CollectSlider;

CollectSlider.propTypes = {
    photos: PropTypes.array.isRequired,
};
