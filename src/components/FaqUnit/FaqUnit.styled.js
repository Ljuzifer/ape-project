import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const FaqImage = styled.img`
    display: none;
    width: 148px;
    height: 183px;
    transform: translate(5px, -25px) rotate(-16deg);
`;

export const NumberThumb = styled.span`
    font-family: ${root.fonts.biro};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.67;
    width: 28px;
    margin-left: auto;
    color: ${root.colors.mainPinkColor};
`;

export const InfoThumb = styled.div`
    width: 169px;
    margin-left: 8px;
    cursor: pointer;

    h4 {
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 20px;
        line-height: 1;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
    }

    p {
        display: none;
        overflow: hidden;
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.16667;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 339px;
        margin-left: 21px;
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 635px;
        margin-left: 27px;
    }
`;
