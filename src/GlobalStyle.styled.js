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
    background-color: ${root.colors.mainDarkColor};
    
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    
    font-family: 'Messina Sans Mono', 'Right Grotesk', 'Biro Script Plus', 'Roboto' sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar {
    appearance: none;
    background: transparent;
    width: 0;
    /* height: 0; */
  }
}

code {
    font-family: 'Messina Sans Mono', 'Right Grotesk', 'Biro Script Plus', 'Roboto' monospace;
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
    cursor: pointer;
}


// FONTS ONLINE

/* @font-face {
    font-family: "Right Grotesk";
    font-style: normal;
    font-weight: 900;
    src: url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.eot");
    src: url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/b22e7f36ecc1dd3baa7403f58a178ca6.svg#Right Grotesk Compact Black")format("svg");
}

@font-face {
    font-family: "Biro Script";
    src: url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.eot");
    src: url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/db773647ead7935ead46aeeb03917a6a.svg#Biro Script Plus Bold")format("svg");
}

@font-face {
    font-family: "Messina Sans Mono";
    src: url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.eot");
    src: url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/bbb0e26c14f79333dad33f3ed785580c.svg#MessinaSansMonoWeb Regular")format("svg");
} */
`;

export const Section = styled.section`
    margin: 0 auto;

    min-width: ${root.breakpoints.minMobile};
    max-width: ${root.breakpoints.maxMobile};

    @media (min-width: ${root.breakpoints.tablet}) {
        max-width: ${root.breakpoints.tablet};
    }

    @media (min-width: ${root.breakpoints.desktop}) {
        max-width: ${root.breakpoints.maxDesktop};
    }
`;
