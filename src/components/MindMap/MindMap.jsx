import React from "react";
import useMedia from "use-media";
import { Section } from "../../GlobalStyle.styled";
import { MapContainer } from "./MindMap.styled";
import MapSlider from "../MapSlider/MapSlider";
import cards from "../../exports/mindCards";

function MindMap() {
    const isMobScreen = useMedia({ maxWidth: "767px" });

    return (
        <Section>
            <MapContainer>
                <h2>mind map</h2>
                {isMobScreen ? <MapSlider cards={cards} /> : <div>OOPS!!!</div>}
            </MapContainer>
        </Section>
    );
}

export default MindMap;
