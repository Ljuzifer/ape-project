import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MindMap from "./components/MindMap/MindMap";
import FaqUnitsList from "./components/FaqUnitsList/FaqUnitsList";
import Collection from "./components/Collection/Collection";
import AreYouIn from "./components/AreYouIn/AreYouIn";
import Footer from "./components/Footer/Footer";

import { GlobalStyle } from "./GlobalStyle.styled";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <main>
                <Hero />
                <About anchor='about' />
                <MindMap anchor='m-map' />
                <FaqUnitsList anchor='faq' />
                <Collection anchor='collection' />
                <AreYouIn anchor='mint' />
            </main>
            <Footer />

            <GlobalStyle />
            <Toaster />
        </>
    );
}

export default App;
