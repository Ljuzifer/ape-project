import "normalize.css";
import styled, { createGlobalStyle } from "styled-components";
import { root } from "./stylesheets/root";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

/* chrome */
html::-webkit-scrollbar {
    display: none;
}

/* firefox */
html {
    scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

body {
    margin: 0;
    background-color: #181818;
    
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    
    font-family: 'Messina Sans Mono', 'Right Grotesk', 'Biro Script Plus', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img,
video {
    display: block;
    height: auto;
    width: 100%;
}

iframe {
    border: 0;
}

h1,
h2,
h3,
h4,
p {
    margin: 0;
    padding: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

button {
    display: block;
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`;

export const Section = styled.section`
    padding: 0 8px;
    margin: 0 auto;

    min-width: ${root.breakpoints.minMobile};
    max-width: ${root.breakpoints.maxMobile};
`;
