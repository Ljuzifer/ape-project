import styled, { keyframes } from "styled-components";
import { root } from "../../stylesheets/root";

export const trance = keyframes`
0%{
    opacity: 0;
    transform: scaleX(0);
    /* transform-origin: left; */
}
100%{
    opacity: 1;
    transform: scaleX(1);
    /* transform-origin: right; */
}
`;

export const ToggleNav = styled.nav`
    position: ${(props) => (props.$scroll ? "fixed" : "absolute")};
    width: 736px;
    padding: 0 12px;
    margin: 0 auto;
    top: calc(54px + 12px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 666;
    pointer-events: none;

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: 0 13px;
        width: 1408px;
        width: calc(1408px - 96px * 2 + 12px);
        top: calc(24px + 16px);
    }
`;

export const ToggleList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    border-radius: 12px 0 0 12px;
    margin: 0 48px 0 auto;
    min-width: 288px;
    pointer-events: all;

    width: calc(288px - 48px);
    height: 48px;
    background: ${root.colors.buttonOpacityFirst};
    background-color: ${(props) =>
        props.$top
            ? root.colors.buttonOpacityFirst
            : root.colors.buttonOpacitySecond};
    backdrop-filter: ${(props) => !props.$top && root.colors.filter};

    @media (min-width: ${root.breakpoints.desktop}) {
        width: calc(480px - 80px);
        height: 80px;
        margin-right: calc(96px - 17px);
    }

    li {
        margin: 0;
        padding: 0;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: ${root.fonts.messina};
            text-transform: uppercase;
            font-weight: 600;
            font-size: 12px;
            line-height: 1.17;
            color: ${(props) =>
                props.$top
                    ? root.colors.secondDarkColor
                    : root.colors.textLigth};
            min-width: 48px;
            height: 48px;
            padding: 10px;
            white-space: nowrap;
            cursor: pointer;

            &:hover {
                color: ${(props) =>
                    props.$top ? root.colors.textLigth : root.colors.textPink};
                text-decoration: underline;
            }

            @media (min-width: ${root.breakpoints.desktop}) {
                width: 80px;
                height: 80px;
                font-weight: 600;
                font-size: 16px;
            }
        }
    }
`;
