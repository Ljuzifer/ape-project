import React from "react";
import { GlobalStyle } from "./GlobalStyle.styled";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MindMap from "./components/MindMap/MindMap";

function App() {
    return (
        <>
            <Hero />
            <About />
            <MindMap />

            <GlobalStyle />
        </>
    );
}

export default App;
