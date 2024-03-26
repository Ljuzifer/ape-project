import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";
import { root } from "../../stylesheets/root";

function ToggleMenu({ isActive, toggleClose, isTop, isScroll }) {
    const toggleRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                toggleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleClose]);

    if (isActive) {
        return (
            <ToggleNav style={{ position: !isScroll && "fixed" }}>
                <ToggleList
                    id='toggle'
                    ref={toggleRef}
                    style={{
                        background:
                            !isTop && `${root.colors.buttonOpacitySecond}`,
                        backdropFilter: !isTop && `${root.colors.filter}`,
                    }}
                    $scroll={!isTop}>
                    <li>
                        <a
                            href='#about'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
                            about
                        </a>
                    </li>
                    <li>
                        <a
                            href='#m-map'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
                            m-map
                        </a>
                    </li>
                    <li>
                        <a
                            href='#collection'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
                            arts
                        </a>
                    </li>
                    <li>
                        <a
                            href='#faq'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
                            faq
                        </a>
                    </li>
                    <li>
                        <a
                            href='#mint'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
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
};
