import styled from "styled-components";
// import heroImg from "../../../assets/images/apes/hero-img-desk-1x.png";
import hero from "../../exports/hero";

export const Herosection = styled.section`
    padding: 54px 8px 0;
    margin: 0 auto;
`;

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    height: 542px;
    padding: 36px 64px 0;
    background-color: #dc3b5a;
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

        backdrop-filter: blur(12px);
        background: rgba(30, 30, 30, 0.1);
    }

    p {
        position: absolute;
        text-align: center;
        width: 217px;
        bottom: 19px;
        left: 50%;
        transform: translateX(-50%);
    }

    h1,
    h2 {
        text-align: center;
    }
`;
