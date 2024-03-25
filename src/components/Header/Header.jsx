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
    const [isScroll, setIsScroll] = useState(true);
    const isMobile = useMedia({ maxWidth: "767px" });

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY < 8);
            setIsTop(window.scrollY < 400);
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
                    position: isScroll || isMenuOpen ? "absolute" : "fixed",
                    pointerEvents: !isTop && "none",
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
                                    isScroll || (!isScroll && isMenuOpen)
                                        ? "visible"
                                        : "hidden",
                            }}
                        />
                    </LogoDesktop>
                </a>

                <MenuDesktop>
                    <button
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
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
                                (isMenuOpen && hover) || (!isTop && hover)
                                    ? `${root.colors.textPink}`
                                    : isMenuOpen || !isTop
                                    ? root.colors.textLigth
                                    : null,

                            borderRadius: isToggleMenu ? "0 12px 12px 0" : null,

                            pointerEvents: !isTop && "all",
                        }}>
                        {isMenuOpen ? "close" : "menu"}
                    </button>
                    <nav>
                        <ul style={{ pointerEvents: !isTop && "all" }}>
                            <li
                                onMouseEnter={toggleHover}
                                onMouseLeave={toggleHover}
                                style={{
                                    backgroundColor:
                                        isMenuOpen || !isTop
                                            ? root.colors.buttonOpacitySecond
                                            : null,
                                }}>
                                <a
                                    href='https://discord.com/'
                                    target='blanck'
                                    aria-label='Discord link'
                                    rel='noopener norefferer nofollow'>
                                    <Discord
                                        style={{
                                            fill:
                                                (isMenuOpen && hover) ||
                                                (!isTop && hover)
                                                    ? `${root.colors.textPink}`
                                                    : isMenuOpen || !isTop
                                                    ? root.colors.textLigth
                                                    : null,
                                        }}
                                    />
                                </a>
                            </li>
                            <li
                                onMouseEnter={toggleHover}
                                onMouseLeave={toggleHover}
                                style={{
                                    backgroundColor:
                                        isMenuOpen || !isTop
                                            ? root.colors.buttonOpacitySecond
                                            : null,
                                }}>
                                <a
                                    href='https://opensea.io/'
                                    target='blanck'
                                    aria-label='OpenSea link'
                                    rel='noopener norefferer nofollow'>
                                    <OpenSea
                                        style={{
                                            fill:
                                                (isMenuOpen && hover) ||
                                                (!isTop && hover)
                                                    ? `${root.colors.textPink}`
                                                    : isMenuOpen || !isTop
                                                    ? root.colors.textLigth
                                                    : null,
                                        }}
                                    />
                                </a>
                            </li>
                            <li
                                onMouseEnter={toggleHover}
                                onMouseLeave={toggleHover}
                                style={{
                                    backgroundColor:
                                        isMenuOpen || !isTop
                                            ? root.colors.buttonOpacitySecond
                                            : null,
                                }}>
                                <a
                                    href='https://twitter.com/'
                                    target='blanck'
                                    aria-label='X link'
                                    rel='noopener norefferer nofollow'>
                                    <Twitter
                                        style={{
                                            fill:
                                                (isMenuOpen && hover) ||
                                                (!isTop && hover)
                                                    ? `${root.colors.textPink}`
                                                    : isMenuOpen || !isTop
                                                    ? root.colors.textLigth
                                                    : null,
                                        }}
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
                    isTop={isTop}
                    isScroll={isScroll}
                />
            )}
        </header>
    );
}

export default Header;
