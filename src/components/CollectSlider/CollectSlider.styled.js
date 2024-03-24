import Slider from "react-slick";
import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const StyledSlider = styled(Slider)`
    display: flex;
    width: 216px;
    height: 256px;
    margin: 0 auto 24px;
    border-radius: 12px;

    .slick-track {
        width: 4444px !important;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 592px;
        height: 336px;
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 1032px;
        height: 280px;
        margin-bottom: 48px;
    }
`;

export const ButtonThumb = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 150px;

    button {
        background-color: transparent;
        border: none;
        font-family: ${root.fonts.biro};
        font-weight: 400;
        font-size: 24px;
        line-height: 1;
        color: ${root.colors.textLigth};
        cursor: pointer;

        /* &:focus, */
        &:hover {
            color: ${root.colors.mainPinkColor};
        }
    }
`;
