import React from "react";
import PropTypes from "prop-types";
import { UnitThumb } from "./CollectionUnit.styled";

function CollectionUnit({ unit, slideOnClick }) {
    return (
        <UnitThumb onClick={() => slideOnClick()}>
            <img
                src={unit.mobile1x || unit.desktop1x}
                alt={unit.alt}
                srcSet={`${unit.mobile1x || unit.desktop1x} 1x, 
                ${unit.mobile2x || unit.desktop2x} 2x`}
            />
        </UnitThumb>
    );
}

export default CollectionUnit;

CollectionUnit.propTypes = {
    unit: PropTypes.object.isRequired,
    slideOnClick: PropTypes.func,
};
