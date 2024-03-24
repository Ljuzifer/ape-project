import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const MapContainer = styled.div`
    margin: 0 auto;
    width: 216px;
    /* height: 242px; */
    padding: ${root.container.paddingMob};

    h2 {
        margin-bottom: 24px;
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 44px;
        line-height: 0.9;
        text-transform: uppercase;
        text-align: center;
        color: ${root.colors.textLigth};
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        padding: ${root.container.paddingTab};
        width: calc(592px + (16px * 2));

        h2 {
            font-size: 80px;
            line-height: 1;
            margin-bottom: 40px;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: ${root.container.paddingDesk};
        width: calc(1032px + (16px * 2));

        h2 {
            font-size: 160px;
            margin-bottom: 80px;
        }
    }
`;
