import styled from "styled-components";
import hero from "../../exports/hero";
import { root } from "../../stylesheets/root";

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 542px;
    padding: 36px 64px 0;
    background-color: ${root.colors.mainPinkColor};
    border-radius: 12px;

    background-image: url(${hero.mobile1x});
    background-repeat: no-repeat;
    background-position: bottom 110px center;
    background-size: 216px 284px;

    a {
        position: absolute;
        bottom: 73px;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        padding: 10px 70px 12px 70px;
        width: 216px;
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
        position: absolute;
        text-align: center;
        width: 217px;
        bottom: 19px;
        left: 50%;
        transform: translateX(-50%);

        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 12px;
        line-height: 1.17;
        text-transform: uppercase;
        text-align: center;
        color: #1e1e1e;
    }

    h1,
    h2 {
        text-align: center;
    }

    h1 {
        font-family: ${root.fonts.grotesk};
        font-style: normal;
        font-weight: 900;
        font-size: 44px;
        line-height: 1;
        letter-spacing: 0.01em;
        margin-bottom: 8px;
        color: ${root.colors.secondDarkColor};
    }

    h2 {
        font-family: ${root.fonts.biro};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.69;
        color: ${root.colors.secondDarkColor};
    }
`;
