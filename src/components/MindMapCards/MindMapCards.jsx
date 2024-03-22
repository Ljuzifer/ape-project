import React from "react";
import PropTypes from "prop-types";
import MindMapUnit from "../MindMapUnit/MindMapUnit";
import { CardsList } from "./MindMapCards.styled";

function MindMapCards({ cards }) {
    return (
        <>
            <CardsList>
                {cards.map((card, index) => (
                    <li key={index}>
                        <MindMapUnit unit={card} />
                    </li>
                ))}
            </CardsList>
        </>
    );
}

export default MindMapCards;

MindMapCards.propTypes = {
    cards: PropTypes.array.isRequired,
};
