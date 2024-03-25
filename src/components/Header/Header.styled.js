import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const HeadContainer = styled.div`
    position: absolute;
    top: calc(54px + 8px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    margin: 0 auto;
    width: 344px;
    z-index: 666;

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
        fill: ${root.colors.secondDarkColor};

        &:hover {
            fill: ${root.colors.textLigth};
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 72px;
        height: 50px;
        margin-top: calc(39px - 24px);
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
    }

    button,
    li {
        font-family: ${root.fonts.messina};
        font-weight: 600;
        font-size: 12px;
        line-height: 1.17;
        color: ${root.colors.secondDarkColor};
        text-transform: uppercase;

        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 8px;
        padding: 10px;
        width: 48px;
        height: 48px;
        backdrop-filter: ${root.colors.filter};
        background: ${root.colors.buttonOpacityFirst};
        cursor: pointer;
        z-index: 667;

        svg {
            width: 16px;
            height: 16px;
            fill: ${root.colors.secondDarkColor};
        }

        &:hover {
            color: ${root.colors.textLigth};
            text-decoration: underline;

            svg {
                fill: ${root.colors.textLigth};
            }
        }

        button.top:hover {
            color: ${root.colors.textPink};
        }
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        svg {
            width: 24px;
            height: 24px;
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
        }
    }
`;
