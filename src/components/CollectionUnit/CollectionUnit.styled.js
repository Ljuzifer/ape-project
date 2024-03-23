import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const UnitThumb = styled.div`
    position: relative;
    width: 216px;
    height: 256px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 24px;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        width: 284px;
        height: 336px;

        img {
            width: 343px;
            height: 347px;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        width: 240px;
        height: 280px;

        img {
            width: 324px;
            height: 323px;
        }
    }
`;
