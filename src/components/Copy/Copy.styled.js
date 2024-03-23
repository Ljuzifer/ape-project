import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const CopyText = styled.p`
    font-family: ${root.fonts.messina};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;
    text-align: center;

    color: ${root.colors.textLigth};
    margin-bottom: 24px;

    @media (max-width: calc(${root.breakpoints.tablet} - 1px)) {
        margin-left: auto;
        margin-right: auto;
        width: 216px;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        margin-bottom: 40px;
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        font-size: 16px;
        line-height: 1.19;
    }
`;
