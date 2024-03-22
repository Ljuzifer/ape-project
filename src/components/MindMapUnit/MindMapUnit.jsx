import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { CardThumb } from "./MindMapUnit.styled";
import { useMedia } from "use-media";

function MindMapUnit({ unit, slideOnClick }) {
    const isTabScreen = useMedia({ minWidth: "768px" });

    const clickCardProp = isTabScreen ? {} : { onClick: () => slideOnClick() };

    if (unit.type === "card") {
        return (
            <CardThumb {...clickCardProp}>
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
