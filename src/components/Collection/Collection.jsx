import React from "react";
import PropTypes from "prop-types";
import CollectSlider from "../CollectSlider/CollectSlider";
import { Section } from "../../GlobalStyle.styled";
import { CollectContainer } from "./Collection.styled";
import collection from "../../exports/collection";
import { useMedia } from "use-media";

function Collection({ anchor }) {
    const isMobScreen = useMedia({ maxWidth: "767px" });
    return (
        <Section id={anchor}>
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

Collection.propTypes = {
    anchor: PropTypes.string.isRequired,
};
