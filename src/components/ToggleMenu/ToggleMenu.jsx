import React from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";
import { root } from "../../stylesheets/root";

function ToggleMenu({ isActive, toggleClose, position }) {
    if (isActive) {
        return (
            <ToggleNav style={{ position: !position && "fixed" }}>
                <ToggleList
                    style={{
                        borderRadius: !position && "12px 0 0 12px",
                        background:
                            !position && `${root.colors.buttonOpacitySecond}`,
                        backdropFilter: !position && `${root.colors.filter}`,
                    }}>
                    <li>
                        <a
                            href='#about'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            about
                        </a>
                    </li>
                    <li>
                        <a
                            href='#m-map'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            m-map
                        </a>
                    </li>
                    <li>
                        <a
                            href='#collection'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            arts
                        </a>
                    </li>
                    <li>
                        <a
                            href='#faq'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            faq
                        </a>
                    </li>
                    <li>
                        <a
                            href='#mint'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
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
    position: PropTypes.bool,
};
