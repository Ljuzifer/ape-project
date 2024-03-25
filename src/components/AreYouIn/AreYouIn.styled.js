import { Field, Form } from "formik";
import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const MintContainer = styled.div`
    margin: 0 auto;
    width: calc(216px + (8px * 2));
    padding: ${root.container.paddingMob};

    h2 {
        font-family: ${root.fonts.grotesk};
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
        font-size: 44px;
        line-height: 0.91;
        color: ${root.colors.textLigth};
        margin-bottom: 24px;
    }

    > svg {
        display: flex;
        align-items: center;
        width: 36px;
        height: 36px;
        fill: ${root.colors.textLigth};
        margin: 0 auto 16px;
    }

    p {
        font-family: ${root.fonts.messina};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.19;
        text-transform: uppercase;
        text-align: center;
        color: ${root.colors.textLigth};
        margin-bottom: 16px;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: calc(379px + (16px * 2));
        padding: ${root.container.paddingTab};

        h2 {
            font-size: 80px;
            line-height: 1;
            margin-bottom: 40px;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: calc(745px + (16px * 2));
        padding: ${root.container.paddingDesk};

        h2 {
            font-size: 160px;
            margin-bottom: 80px;
        }

        p {
            width: 581px;
            font-size: 24px;
            line-height: 1.21;
            margin: 0 auto 40px;
        }
    }
`;

export const FormThumb = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 216px;
    height: 169px;
    margin: 0 auto;
    text-transform: uppercase;

    label {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px 0 0 8px;
            padding: 10px;
            width: 48px;
            height: 48px;
            backdrop-filter: blur(12px);
            background: ${root.colors.secondDarkColor};

            > svg {
                width: 24px;
                height: 24px;
            }
        }
    }

    span {
        position: absolute;
        right: 0;
        bottom: -13px;
        display: inline-block;
        font-family: ${root.fonts.messina};
        color: ${root.colors.textFormError};
        font-weight: 400;
        font-size: 10px;
        line-height: 1.2;
        text-transform: uppercase;
        text-align: right;

        @media (min-width: ${root.breakpoints.desktop}) {
            bottom: -15px;
        }
    }

    button {
        border: none;
        border-radius: 8px;
        padding: 10px 0 12px;
        width: 100%;
        height: 41px;
        backdrop-filter: ${root.colors.filter};
        background: ${root.colors.mainPinkColor};

        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 16px;
        line-height: 1.19;
        color: ${root.colors.textLigth};
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;

        &:hover,
        &:focus {
            color: ${root.colors.secondDarkColor};
        }
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 248px;
        height: 169px;
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 397px;
        height: 246px;
        gap: 24px;

        button {
            border-radius: 12px;
            padding: 16px 140px 20px 140px;
            height: 70px;
            font-size: 28px;
            line-height: 1.21;
        }

        label > div {
            border-radius: 12px 0 0 12px;
            padding: 10px;
            width: 64px;
            height: 64px;
        }

        span {
            font-size: 12px;
            line-height: 1.17;
        }
    }
`;

export const InputThumb = styled(Field)`
    border: 1px solid
        ${(props) =>
            props.error
                ? root.colors.textFormError
                : root.colors.secondDarkColor};
    color: ${(props) =>
        props.error ? root.colors.textFormError : root.colors.textLigth};
    font-family: ${root.fonts.messina};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;
    outline: none;
    background: transparent;
    border-radius: 0 8px 8px 0;
    padding: 17px 22px 17px 24px;
    width: 168px;
    height: 48px;

    &::placeholder {
        color: ${root.colors.textFormDefault};
    }

    &:hover,
    &:focus,
    &:active {
        border-color: ${root.colors.textLigth};
        color: ${root.colors.textFormFilled};
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 248px;
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        border-radius: 0 12px 12px 0;
        padding: 22px 24px;
        width: 333px;
        height: 64px;
        font-size: 16px;
        line-height: 1.19;
    }
`;
