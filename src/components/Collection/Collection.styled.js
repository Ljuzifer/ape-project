import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const CollectContainer = styled.div`
    margin: 0 auto;
    padding: ${root.container.paddingMob};

    h2 {
        font-family: ${root.fonts.grotesk};
        font-weight: 900;
        font-size: 44px;
        line-height: 0.9;
        text-transform: uppercase;
        color: ${root.colors.textLigth};
        text-align: center;
        margin-bottom: 24px;
    }

    @media (min-width: ${root.breakpoints.tablet}) {
        padding: ${root.container.paddingTab};

        h2 {
            font-size: 80px;
            line-height: 1;
            margin-bottom: 40px;
        }
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: ${root.container.paddingDesk};

        h2 {
            font-size: 160px;
            margin-bottom: 80px;
        }
    }
`;
