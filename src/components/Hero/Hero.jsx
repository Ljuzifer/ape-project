import React from "react";
import { Section } from "../../GlobalStyle.styled";
import { HeroContainer, OutsideDiv, InsideDiv } from "./Hero.styled";
import hero from "../../exports/hero";
import { root } from "../../stylesheets/root";

function Hero() {
    return (
        <Section>
            <HeroContainer>
                <div>
                    <OutsideDiv>
                        <h2>diD yOu seE iT ?</h2>
                        <h1>YACHT APES</h1>
                        <h3>Apes aRe eveRywhere</h3>

                        <img
                            srcSet={`
                          ${hero.mobile1x} 320w,
                          ${hero.mobile2x} 640w,
                          ${hero.tablet1x} 768w,
                          ${hero.tablet2x} 1536w,
                          ${hero.desktop1x} 1280w,
                          ${hero.desktop2x} 2560w
                        `}
                            sizes={`
                        (min-width: ${root.breakpoints.minMobile}) and (max-width: calc(${root.breakpoints.tablet} - 1px)) 216px,
                        (min-width: ${root.breakpoints.tablet}) and (max-width: calc(${root.breakpoints.desktop} - 1px)) 768px,
                          1280px
                        `}
                            src={hero.desktop1x}
                            alt={hero.alt}
                            loading='lazy'
                        />

                        <InsideDiv>
                            <a href='#mint' type='button'>
                                MEET APES
                            </a>
                            <p>
                                Yacht Ape is a collection of unique digital apes
                                that you can own in NFT format
                            </p>
                        </InsideDiv>
                    </OutsideDiv>
                </div>
            </HeroContainer>
        </Section>
    );
}

export default Hero;
