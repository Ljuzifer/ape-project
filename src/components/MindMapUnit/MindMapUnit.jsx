import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { CardThumb } from "./MindMapUnit.styled";

function MindMapUnit({ unit, slideOnClick }) {
    if (unit.type === "card") {
        return (
            <CardThumb onClick={() => slideOnClick()}>
                <div>
                    <p>{unit.comment}</p>
                    <h3>{unit.title} </h3>
                </div>
            </CardThumb>
        );
    } else if (unit.type === "link") {
        return (
            <CardThumb>
                <a href={unit.href} target='blank' rel='noopener noreferrer'>
                    <Arrow />
                    <h3>{unit.title()} </h3>
                </a>
            </CardThumb>
        );
    }
}

export default MindMapUnit;

MindMapUnit.propTypes = {
    unit: PropTypes.object.isRequired,
    slideOnClick: PropTypes.func,
};
