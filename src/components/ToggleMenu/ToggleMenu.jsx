import React from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";

function ToggleMenu({ isActive, toggleClose }) {
    if (isActive) {
        return (
            <ToggleNav>
                <ToggleList>
                    <li>
                        <a href='#about' onClick={toggleClose}>
                            about
                        </a>
                    </li>
                    <li>
                        <a href='#m-map' onClick={toggleClose}>
                            m-map
                        </a>
                    </li>
                    <li>
                        <a href='#collection' onClick={toggleClose}>
                            arts
                        </a>
                    </li>
                    <li>
                        <a href='#faq' onClick={toggleClose}>
                            faq
                        </a>
                    </li>
                    <li>
                        <a href='#mint' onClick={toggleClose}>
                            mint
                        </a>
                    </li>
                </ToggleList>
            </ToggleNav>
        );
    }
    return;
}

export default ToggleMenu;

ToggleMenu.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleClose: PropTypes.func,
};
