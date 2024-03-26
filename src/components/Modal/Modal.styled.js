import styled, { keyframes } from "styled-components";
import { root } from "../../stylesheets/root";

export const ModalContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MobileList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    list-style: none;
    position: ${(props) => props.isOpen && "relative"};

    font-family: ${root.fonts.messina};
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    color: ${root.colors.textLigth};
    text-transform: uppercase;

    li {
        &:hover {
            color: ${root.colors.textPink};
        }
    }
`;

export const Animation = keyframes`
from{
    transform: scale(0);
    transform-origin: bottom;
    /* transition: transform ${root.transition}; */
}
to{
    transform: scaleY(1);
    transform-origin: top;

    /* transition: transform ${root.transition} */
}
`;
