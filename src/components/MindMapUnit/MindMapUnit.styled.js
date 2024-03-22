import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const CardThumb = styled.div`
    position: relative;

    background-color: ${root.colors.secondDarkColor};
    width: 100%;
    height: 242px;
    border-radius: 12px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 24px;
    }

    p {
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.16667;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
    }

    h3 {
        margin-top: auto;
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 32px;
        line-height: 1;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
    }

    a {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 24px;
        border-radius: 12px;
        background-color: ${root.colors.mainPinkColor};
    }

    svg {
        position: absolute;
        top: 36px;
        right: 36px;
        width: 24px;
        height: 24px;
        fill: ${root.colors.textLigth};
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 284px;

        p {
            width: 128px;
            margin-left: auto;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 504px;
        height: 480px;

        p {
            width: 228px;
            font-size: 24px;
            line-height: 1.20833;
        }

        h3 {
            font-size: 64px;
        }

        svg {
            width: 40px;
            height: 40px;
        }
    }
`;
