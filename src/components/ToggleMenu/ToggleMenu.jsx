import React from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";
import { root } from "../../stylesheets/root";

function ToggleMenu({ isActive, toggleClose, position }) {
    if (isActive) {
        return (
            <ToggleNav style={{ position: !position && "fixed" }}>
                <ToggleList
                    style={{ borderRadius: !position && "12px 0 0 12px" }}>
                    <li
                        style={{
                            background:
                                !position &&
                                `${root.colors.buttonOpacitySecond}`,
                        }}>
                        <a
                            href='#about'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            about
                        </a>
                    </li>
                    <li
                        style={{
                            background:
                                !position &&
                                `${root.colors.buttonOpacitySecond}`,
                        }}>
                        <a
                            href='#m-map'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            m-map
                        </a>
                    </li>
                    <li
                        style={{
                            background:
                                !position &&
                                `${root.colors.buttonOpacitySecond}`,
                        }}>
                        <a
                            href='#collection'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            arts
                        </a>
                    </li>
                    <li
                        style={{
                            background:
                                !position &&
                                `${root.colors.buttonOpacitySecond}`,
                        }}>
                        <a
                            href='#faq'
                            onClick={toggleClose}
                            style={{
                                color: !position && `${root.colors.textLigth}`,
                            }}>
                            faq
                        </a>
                    </li>
                    <li
                        style={{
                            background:
                                !position &&
                                `${root.colors.buttonOpacitySecond}`,
                        }}>
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
