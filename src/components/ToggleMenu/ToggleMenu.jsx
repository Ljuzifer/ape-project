import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";

function ToggleMenu({ isActive, toggleRef, toggleClose, isTop, isScroll }) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                event.target.id !== "toggle" &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                toggleClose();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                toggleClose();
            }
        };

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isActive, toggleClose]);

    if (isActive) {
        return (
            <ToggleNav $scroll={!isScroll}>
                <ToggleList id='toggle' $top={isTop} ref={toggleRef}>
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
    isTop: PropTypes.bool,
    isScroll: PropTypes.bool,
    toggleRef: PropTypes.object.isRequired,
};
