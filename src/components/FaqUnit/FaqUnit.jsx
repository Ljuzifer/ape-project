import React from "react";
import PropTypes from "prop-types";
import { FaqImage, InfoThumb, NumberThumb } from "./FaqUnit.styled";

function FaqUnit({ unit, number }) {
    return (
        <>
            <FaqImage
                srcSet={`${unit.faq1x} 1x,${unit.faq2x} 2x`}
                src={unit.faq1x}
                alt={unit.alt}
            />
            <NumberThumb>{`[ ${number} ]`}</NumberThumb>
            <InfoThumb>
                <h4>{unit.question} </h4>
                <p>{unit.answer} </p>
            </InfoThumb>
        </>
    );
}

export default FaqUnit;

FaqUnit.propTypes = {
    unit: PropTypes.object.isRequired,
    number: PropTypes.number,
};
