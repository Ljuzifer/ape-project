import styled from "styled-components";
import { root } from "../../stylesheets/root";

export const FootContainer = styled.div`
    margin: 0 auto;
    padding: ${root.container.paddingMob};

    @media (min-width: ${root.breakpoints.tablet}) {
        padding: ${root.container.paddingTab};
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        padding: ${root.container.paddingDesk};
    }
`;
