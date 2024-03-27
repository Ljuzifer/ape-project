import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleListItem, ToggleNav } from "./ToggleMenu.styled";
import { root } from "../../stylesheets/root";

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

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, toggleClose]);

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
                        <ToggleListItem
                            $scroll={isTop}
                            href='#about'
                            onClick={toggleClose}
                            style={{
                                color: !isTop && `${root.colors.textLigth}`,
                            }}>
                            about
                        </ToggleListItem>
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
    toggleRef: PropTypes.object.isRequired,
};
