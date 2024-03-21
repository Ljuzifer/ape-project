import styled from "styled-components";
import about from "../../exports/about";

export const AboutContainer = styled.div`
    /* position: relative; */
    width: 100%;
    height: calc(873px + 52px);
    padding: 60px 64px 0;

    background-image: url(${about.aboutMob1x});
    background-repeat: no-repeat;
    background-position: bottom 52px center;
    background-size: 216px 292px;
`;
