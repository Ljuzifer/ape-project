import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const MapContainer = styled.div`
    margin: 0 auto;
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
`;
