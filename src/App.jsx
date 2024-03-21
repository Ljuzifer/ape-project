import React from "react";
import { GlobalStyle } from "./GlobalStyle.styled";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
    return (
        <>
            <Hero />
            <About />
            <GlobalStyle />
        </>
    );
}

export default App;
