import styled from "styled-components";
import about from "../../exports/about";
import { root } from "../../stylesheets/root";

export const AboutContainer = styled.div`
    margin: 0 auto;
    height: calc(873px + 52px);
    padding: ${root.container.paddingMob};

    background-repeat: no-repeat;
    background-position: bottom 52px center;
    background-size: 216px 292px;

    @media (min-device-pixel-ratio: 1),
        (-webkit-min-device-pixel-ratio: 1),
        (-o-min-device-pixel-ratio: 1/1),
        (min-resolution: 96dpi),
        (min-resolution: 1dppx) {
        background-image: url(${about.aboutMob1x});
    }

    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (-o-min-device-pixel-ratio: 2/1),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${about.aboutMob2x});
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: calc(768px - 2 * (88px - 16px));
        height: calc(627px + 52px);
        padding: ${root.container.paddingTab};

        background-repeat: no-repeat;
        background-position: bottom 52px right 16px;
        background-size: 313px 422px;

        @media (min-device-pixel-ratio: 1),
            (-webkit-min-device-pixel-ratio: 1),
            (-o-min-device-pixel-ratio: 1/1),
            (min-resolution: 96dpi),
            (min-resolution: 1dppx) {
            background-image: url(${about.aboutTab1x});
        }

        @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (-o-min-device-pixel-ratio: 2/1),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${about.aboutTab2x});
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: calc(1440px - 2 * (204px - 16px));
        height: calc(1004px + 86px);
        padding: ${root.container.paddingDesk};

        background-repeat: no-repeat;
        background-position: bottom 86px right 16px;
        background-size: 492px 662px;

        @media (min-device-pixel-ratio: 1),
            (-webkit-min-device-pixel-ratio: 1),
            (-o-min-device-pixel-ratio: 1/1),
            (min-resolution: 96dpi),
            (min-resolution: 1dppx) {
            background-image: url(${about.aboutDesk1x});
        }

        @media (min-device-pixel-ratio: 2),
            (-webkit-min-device-pixel-ratio: 2),
            (-o-min-device-pixel-ratio: 2/1),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${about.aboutDesk2x});
        }
    }
`;

export const FirstDiv = styled.div`
    h2 {
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 40px;
        line-height: 1;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
        white-space: pre-wrap;
        width: 216px;
        margin: 0 auto 16px;
        text-align: left;

        span {
            color: ${root.colors.textPink};
        }
    }

    p {
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.19;
        text-transform: uppercase;
        text-align: right;
        color: ${root.colors.textLigth};
        white-space: pre-wrap;
        width: 216px;
        margin: 0 auto 36px;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 68px;

        h2 {
            width: 269px;
            font-size: 60px;
            white-space: normal;
            margin: 0;
        }

        p {
            width: 275px;
            margin: 0;
            white-space: normal;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        margin-bottom: 56px;

        h2 {
            width: 538px;
            font-size: 120px;
        }

        p {
            width: 409px;
            font-size: 24px;
            line-height: 1.20833;
        }
    }
`;

export const SecondDiv = styled.div`
    width: 216px;
    margin: 0 auto;

    svg {
        display: block;
        width: 24px;
        height: 24px;
        fill: ${root.colors.textLigth};
        margin: 0 auto 16px;
    }

    p {
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.17;
        text-transform: uppercase;
        text-align: center;
        color: ${root.colors.textLigth};
        margin: 0 auto;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 269px;
        margin: 0 auto 0 0;

        svg {
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            line-height: 1.19;
            margin: 0;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 417px;

        svg {
            width: 36px;
            height: 36px;
            margin-bottom: 36px;
        }

        p {
            font-size: 24px;
            line-height: 1.21;
        }
    }
`;
