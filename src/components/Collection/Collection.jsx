import React from "react";
import CollectSlider from "../CollectSlider/CollectSlider";
import { Section } from "../../GlobalStyle.styled";
import { CollectContainer } from "./Collection.styled";
import collection from "../../exports/collection";
import { useMedia } from "use-media";

function Collection() {
    const isMobScreen = useMedia({ maxWidth: "767px" });
    return (
        <Section>
            <CollectContainer>
                <h2>collection</h2>
                <CollectSlider
                    photos={
                        isMobScreen
                            ? collection.imgMobile
                            : collection.imgDesktop
                    }
                />
            </CollectContainer>
        </Section>
    );
}

export default Collection;
