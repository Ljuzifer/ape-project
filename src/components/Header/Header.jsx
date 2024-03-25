import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Discord } from "../../icons/discord.svg";
import { ReactComponent as OpenSea } from "../../icons/opensea.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import { HeadContainer, LogoDesktop, MenuDesktop } from "./Header.styled";
import { root } from "../../stylesheets/root";
import { useMedia } from "use-media";
import ToggleMenu from "../ToggleMenu/ToggleMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToggleMenu, setIsToggleMenu] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const isMobile = useMedia({ maxWidth: "767px" });

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 88);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false);
        } else {
            setIsToggleMenu(false);
        }
    }, [isMobile]);

    const handleToggle = () => {
        setIsToggleMenu(!isToggleMenu);
    };

    const toggleClose = () => {
        setIsToggleMenu(false);
    };

    const openModal = () => {
        if (isMobile) {
            setIsMenuOpen(true);
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <header>
            <HeadContainer
                style={{
                    position: isTop ? "absolute" : "fixed",
                }}>
                <a
                    href='https://ljuzifer.github.io/ape-project/'
                    aria-label='Logo of Company'
                    rel='noopener norefferer nofollow'>
                    <LogoDesktop>
                        <Logo
                            style={{
                                fill: isMenuOpen && `${root.colors.textLigth}`,
                                visibility:
                                    isTop || (!isTop && isMenuOpen)
                                        ? "visible"
                                        : "hidden",
                            }}
                        />
                    </LogoDesktop>
                </a>

                <MenuDesktop>
                    <button
                        className={isTop ? "" : "top"}
                        type='button'
                        onClick={
                            isMobile
                                ? !isMenuOpen
                                    ? openModal
                                    : closeModal
                                : () => handleToggle()
                        }
                        style={{
                            backgroundColor:
                                isMenuOpen || !isTop
                                    ? root.colors.buttonOpacitySecond
                                    : null,
                            color:
                                isMenuOpen || !isTop
                                    ? root.colors.textLigth
                                    : null,
                            borderRadius: isToggleMenu ? "0 12px 12px 0" : null,
                            ":hover": {
                                color: root.colors.textPink,
                            },
                        }}
                        // style={
                        //     (isMenuOpen || !isTop
                        //         ? {
                        //               backgroundColor: `${root.colors.buttonOpacitySecond}`,
                        //               color: `${root.colors.textLigth}`,
                        //           }
                        //         : null) ||
                        //     (isToggleMenu
                        //         ? { borderRadius: "0 12px 12px 0" }
                        //         : null)
                        // }
                    >
                        {isMenuOpen ? "close" : "menu"}
                    </button>
                    <nav>
                        <ul>
                            <li
                                style={
                                    isMenuOpen || !isTop
                                        ? {
                                              backgroundColor: `${root.colors.buttonOpacitySecond}`,
                                          }
                                        : null
                                }>
                                <a
                                    href='https://discord.com/'
                                    target='blanck'
                                    aria-label='Discord link'
                                    rel='noopener norefferer nofollow'>
                                    <Discord
                                        style={
                                            isMenuOpen || !isTop
                                                ? {
                                                      fill: `${root.colors.textLigth}`,
                                                      ":hover": `${root.colors.textPink}`,
                                                  }
                                                : null
                                        }
                                    />
                                </a>
                            </li>
                            <li
                                style={
                                    isMenuOpen || !isTop
                                        ? {
                                              backgroundColor: `${root.colors.buttonOpacitySecond}`,
                                          }
                                        : null
                                }>
                                <a
                                    href='https://opensea.io/'
                                    target='blanck'
                                    aria-label='OpenSea link'
                                    rel='noopener norefferer nofollow'>
                                    <OpenSea
                                        style={
                                            isMenuOpen || !isTop
                                                ? {
                                                      fill: `${root.colors.textLigth}`,
                                                  }
                                                : null
                                        }
                                    />
                                </a>
                            </li>
                            <li
                                style={
                                    isMenuOpen || !isTop
                                        ? {
                                              backgroundColor: `${root.colors.buttonOpacitySecond}`,
                                          }
                                        : null
                                }>
                                <a
                                    href='https://twitter.com/'
                                    target='blanck'
                                    aria-label='X link'
                                    rel='noopener norefferer nofollow'>
                                    <Twitter
                                        style={
                                            isMenuOpen || !isTop
                                                ? {
                                                      fill: `${root.colors.textLigth}`,
                                                  }
                                                : null
                                        }
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </MenuDesktop>
            </HeadContainer>

            {isMobile ? (
                <Modal state={isMenuOpen} onClose={closeModal} />
            ) : (
                <ToggleMenu
                    isActive={isToggleMenu}
                    toggleClose={toggleClose}
                    position={isTop}
                />
            )}
        </header>
    );
}

export default Header;
