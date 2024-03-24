import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const FaqContainer = styled.div`
    margin: 0 auto;
    padding: ${root.container.paddingMob};

    h2 {
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 44px;
        line-height: 0.9;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
        margin-bottom: 24px;
        text-align: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    li {
        display: flex;
        justify-content: space-between;
        border-radius: 12px;
        width: 216px;
        padding: 8px 8px 10px;
        margin: 0 auto;
        background-color: transparent;

        &:hover,
        &:focus {
            span {
                color: ${root.colors.textLigth};
            }

            h4 {
                color: ${root.colors.textPink};
            }
        }

        &.current {
            background-color: ${root.colors.secondDarkColor};
            /* cursor: pointer; */
        }

        &.current span {
            color: ${root.colors.textLigth};
        }

        &.current h4 {
            margin-bottom: 10px;
            color: ${root.colors.textPink};
        }

        &.current p {
            display: block;
        }
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        padding: ${root.container.paddingTab};

        h2 {
            font-size: 80px;
            line-height: 1;
            margin-bottom: 48px;
        }

        li {
            border-radius: 16px;
            width: 592px;
            height: 159px;
            padding: 18px 16px 23px;

            &.current img {
                display: block;
            }

            span {
                width: 35px;
            }

            h4 {
                font-size: 32px;
                margin-bottom: 12px;
            }
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: ${root.container.paddingDesk};

        h2 {
            font-size: 160px;
            margin-bottom: 80px;
        }

        li {
            border-radius: 24px;
            width: 1032px;
            height: 250px;
            padding: 24px;

            img {
                width: 248px;
                height: 281px;
                transform: translate(-8px, -38px) rotate(-8deg);
            }

            span {
                width: 52px;
                font-size: 24px;
                line-height: 1.67;
            }

            h4 {
                font-size: 64px;
                margin-bottom: 36px;
            }

            p {
                font-size: 16px;
                line-height: 1.19;
            }
        }
    }
`;
