import React, { useState } from "react";
import { Section } from "../../GlobalStyle.styled";
import faqUnits from "../../exports/faqUnits";
import FaqUnit from "../FaqUnit/FaqUnit";
import { FaqContainer } from "./FaqUnitsList.styled";

function FaqUnitsList() {
    const [activeUnitIndex, setActivUnitIndex] = useState(0);

    const handleUnitClick = (index) => {
        setActivUnitIndex(index);
    };

    return (
        <Section>
            <FaqContainer>
                <h2>faq</h2>
                <ul>
                    {faqUnits.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleUnitClick(index)}
                            // isActive={activeUnitIndex === index}
                            className={
                                activeUnitIndex === index ? "current" : ""
                            }>
                            <FaqUnit unit={item} number={index + 1} />
                        </li>
                    ))}
                </ul>
            </FaqContainer>
        </Section>
    );
}

export default FaqUnitsList;
