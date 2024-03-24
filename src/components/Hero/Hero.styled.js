import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const HeroContainer = styled.div`
    min-width: 360px;
    max-width: 480px;
    padding: 54px 8px 0;
    margin: 0 auto;

    height: calc(542px + 54px);
    > div {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 36px 64px 0;
        background-color: ${root.colors.mainPinkColor};
        border-radius: 12px;

        img {
            width: 216px;
            height: 284px;
            margin: 0 auto;
        }

        h1 {
            font-family: ${root.fonts.grotesk};
            font-style: normal;
            font-weight: 900;
            font-size: 44px;
            line-height: 1;
            letter-spacing: 0.01em;
            text-align: center;
            margin-bottom: 8px;
            color: ${root.colors.secondDarkColor};
        }

        h2,
        h3 {
            font-family: ${root.fonts.biro};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.69;
            text-align: center;
            color: ${root.colors.secondDarkColor};
        }

        h3 {
            margin-bottom: 6px;
        }
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        padding: 54px 16px 0;
        max-width: 768px;
        height: calc(421px + 54px);

        > div {
            padding: 124px 72px 0;
            border-radius: 16px;

            h1 {
                margin-bottom: 16px;
                font-size: 92px;
                word-spacing: 155px;
            }

            h2,
            h3 {
                text-align: left;
                font-size: 20px;
                line-height: 1.65;
            }

            h3 {
                margin-bottom: 0;
            }

            background-image: none;

            img {
                position: absolute;
                width: 283px;
                height: 386px;
                left: 206px;
                bottom: 0;
            }
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: 16px 16px 0;
        max-width: 1440px;
        height: calc(677px + 16px);

        > div {
            position: unset;
            padding: 197px 96px 0;
            border-radius: 24px;
            margin: 0 auto;

            h1 {
                font-size: 164px;
                line-height: 1;
                word-spacing: 245px;
            }

            h2,
            h3 {
                font-size: 24px;
                line-height: 1.67;
            }

            h3 {
                margin-left: calc(315px - 192px);
            }

            img {
                width: 463px;
                height: 612px;
                left: calc(445px - 192px);
                bottom: 0;
            }
        }
    }
`;

export const OutsideDiv = styled.div`
    @media (min-width: ${root.breakpoints.desktop}) {
        position: relative;
        width: calc(1408px - 192px * 2);
        height: 100%;
        margin: 0 auto;
    }
`;

export const InsideDiv = styled.div`
    position: absolute;
    width: 216px;
    bottom: 19px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        padding: 10px 70px 12px 70px;
        width: 100%;
        height: 41px;

        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 16px;
        line-height: 1.19;
        color: ${root.colors.secondDarkColor};

        backdrop-filter: ${root.colors.filter};
        background-color: ${root.colors.buttonOpacityFirst};

        &:hover,
        &:focus {
            color: ${root.colors.textLigth};
        }
    }

    p {
        text-align: center;
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.17;
        text-transform: uppercase;
        color: #1e1e1e;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        left: auto;
        transform: none;
        right: 72px;
        bottom: 35px;
        flex-direction: column-reverse;
        gap: 16px;
        width: 190px;

        p {
            text-align: justify;
            text-indent: 40%;
        }

        a {
            border-radius: 12px;
            padding: 10px 61px 12px 61px;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 337px;
        gap: 28px;
        right: 0;
        bottom: 81px;

        p {
            font-size: 16px;
            line-height: 1.19;
            text-indent: 25%;
        }

        a {
            padding: 16px 109px 20px 109px;
            height: 70px;
            font-size: 28px;
            line-height: 1.21;
        }
    }
`;
