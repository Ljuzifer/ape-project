import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const BannerThumb = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100vw;
    height: 52px;
    padding: 6px 0;
    background: #dc3b5a;
    overflow-y: hidden;
`;

export const ThumbContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    animation: marquee 22s linear infinite;

    p {
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
`;
