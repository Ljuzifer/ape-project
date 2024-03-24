import React from "react";
import { Section } from "../../GlobalStyle.styled";
import { HeroContainer } from "./Hero.styled";

function Hero() {
    return (
        <Section style={{ paddingTop: "54px" }}>
            <HeroContainer>
                <h2>diD yOu seE iT ?</h2>
                <h1>YACHT APES</h1>
                <h2>Apes aRe eveRywhere</h2>

                <a href='#mint' type='button'>
                    MEET APES
                </a>
                <p>
                    Yacht Ape is a collection of unique digital apes that you
                    can own in NFT format
                </p>
            </HeroContainer>
        </Section>
    );
}

export default Hero;
