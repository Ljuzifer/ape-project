import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const HeadContainer = styled.div`
    position: ${(props) =>
        !props.$scroll ? (!props.$burger ? "absolute" : "fixed") : "fixed"};
    top: calc(54px + 8px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    margin: 0 auto;
    width: 344px;
    z-index: 666;
    pointer-events: ${(props) => !props.$top && "none"};

    > a {
        height: fit-content;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 736px;
        padding: 0 12px;
        top: calc(54px + 12px);
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 1408px;
        width: calc(1408px - 96px * 2 + 12px);
        top: calc(24px + 16px);
    }
`;

export const LogoDesktop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 32px;
    margin-top: 8px;
    cursor: pointer;

    svg {
        fill: ${(props) =>
            props.$burger
                ? root.colors.textLigth
                : root.colors.secondDarkColor};
        visibility: ${(props) =>
            !props.$scroll || (props.$scroll && props.$burger)
                ? "visible"
                : "hidden"};

        &:hover {
            fill: ${root.colors.textLigth};
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 72px;
        height: 50px;
        margin-top: calc(39px - 24px);

        svg {
            width: 72px;
            height: 50px;
        }
    }
`;

export const MenuDesktop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 48px;
    height: 216px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: ${(props) => !props.$top && "all"};
    }

    button,
    li {
        font-family: ${root.fonts.messina};
        font-weight: 600;
        font-size: 12px;
        line-height: 1.17;
        color: ${(props) =>
            props.$top ? root.colors.secondDarkColor : root.colors.textLigth};
        text-transform: uppercase;

        border: none;
        border-radius: 8px;
        width: 48px;
        height: 48px;
        backdrop-filter: ${root.colors.filter};
        background-color: ${(props) =>
            props.$burger || !props.$top
                ? root.colors.buttonOpacitySecond
                : root.colors.buttonOpacityFirst};
        cursor: pointer;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            width: 100%;
            height: 100%;
        }

        svg {
            width: 16px;
            height: 16px;
            fill: ${(props) =>
                props.$burger || !props.$top
                    ? root.colors.textLigth
                    : root.colors.secondDarkColor};
        }

        &:hover {
            text-decoration: underline;
            color: ${(props) =>
                props.$top ? root.colors.textLigth : root.colors.textPink};

            svg {
                fill: ${(props) =>
                    props.$burger || !props.$top
                        ? root.colors.textPink
                        : root.colors.textLigth};
            }
        }
    }

    button {
        border-radius: ${(props) =>
            props.$toggle_open ? "0 8px 8px 0" : "8px"};
        pointer-events: ${(props) => !props.$top && "all"};
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        svg {
            width: 24px;
            height: 24px;
        }

        button {
            border-radius: ${(props) =>
                props.$toggle_open ? "0 8px 8px 0" : "8px"};
            pointer-events: ${(props) => !props.$top && "all"};
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        gap: 16px;
        width: 80px;
        height: calc(80px * 4 + 16px * 3);

        ul {
            gap: 16px;
        }

        button,
        li {
            width: 80px;
            height: 80px;
            font-size: 16px;
            line-height: 1.19;
            border-radius: 12px;
        }

        button {
            border-radius: ${(props) =>
                props.$toggle_open ? "0 12px 12px 0" : "12px"};
            pointer-events: ${(props) => !props.$top && "all"};
        }
    }
`;
