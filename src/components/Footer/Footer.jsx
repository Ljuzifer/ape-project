import React from "react";
import Copy from "../Copy/Copy";
import { Section } from "../../GlobalStyle.styled";
import { FootContainer } from "./Footer.styled";

function Footer() {
    return (
        <Section>
            <FootContainer>
                <Copy />
            </FootContainer>
        </Section>
    );
}

export default Footer;
