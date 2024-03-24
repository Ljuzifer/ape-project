import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const BannerThumb = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-end;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100vw;
    height: 52px;
    padding: 11px 0;
    background: ${root.colors.mainPinkColor};
    overflow: hidden;

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: 16px 0;
        height: 86px;
    }
`;

export const ThumbContent = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    animation: marquee 22s linear infinite;

    b {
        display: block;
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 36px;
        line-height: 1;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
        margin-right: 24px;
    }

    @keyframes marquee {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        b {
            font-size: 64px;
            margin-right: 36px;
        }
    }
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;

    svg {
        width: 36px;
        height: 36px;
        fill: ${root.colors.textLigth};
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        margin-right: 36px;
    }
`;
