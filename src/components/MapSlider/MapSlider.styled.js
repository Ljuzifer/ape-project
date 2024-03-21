import Slider from "react-slick";
import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const StyledSlider = styled(Slider)`
    min-width: 216px;
    height: auto;
    margin: 0 auto 24px;
`;

export const ButtonThumb = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 150px;
    /* height: 24px; */

    button {
        background-color: transparent;
        border: none;
        font-family: ${root.fonts.biro};
        font-weight: 400;
        font-size: 24px;
        line-height: 1;
        color: ${root.colors.textLigth};

        &:active,
        &:hover,
        &:focus {
            color: ${root.colors.mainPinkColor};
        }
    }
`;
