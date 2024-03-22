import React from "react";
import { GlobalStyle } from "./GlobalStyle.styled";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MindMap from "./components/MindMap/MindMap";
import FaqUnitsList from "./components/FaqUnitsList/FaqUnitsList";

function App() {
    return (
        <>
            <Hero />
            <About />
            <MindMap />
            <FaqUnitsList />

            <GlobalStyle />
        </>
    );
}

export default App;
