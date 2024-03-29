import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";

import { useTransition, animated } from "@react-spring/web";
import { root } from "../../stylesheets/root";

function ToggleMenu({ isActive, toggleRef, toggleClose, isTop, isScroll }) {
    const transitions = useTransition(isActive, {
        from: { transform: "scaleX(0)", transformOrigin: "93.5% 50%" },
        enter: { transform: "scaleX(1)" },
        leave: { transform: "scaleX(0)", transformOrigin: "93.5% 50%" },
        config: { duration: 666 },
    });

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

    return transitions((styles, item) =>
        item ? (
            <ToggleNav $scroll={!isScroll}>
                <animated.div style={styles} transition={root.transition}>
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
                </animated.div>
            </ToggleNav>
        ) : null
    );
}

export default ToggleMenu;

ToggleMenu.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toggleClose: PropTypes.func,
    isTop: PropTypes.bool,
    isScroll: PropTypes.bool,
    toggleRef: PropTypes.object.isRequired,
};
