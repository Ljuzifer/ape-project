import React from "react";
import Copy from "../Copy/Copy";
import { Section } from "../../GlobalStyle.styled";
import { FootContainer } from "./Footer.styled";

function Footer() {
    return (
        <footer>
            <Section>
                <FootContainer>
                    <Copy />
                </FootContainer>
            </Section>
        </footer>
    );
}

export default Footer;
