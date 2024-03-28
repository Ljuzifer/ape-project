import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as Discord } from "../../icons/discord.svg";
import { ReactComponent as OpenSea } from "../../icons/opensea.svg";
import { ReactComponent as Twitter } from "../../icons/twitter.svg";
import { HeadContainer, LogoDesktop, MenuDesktop } from "./Header.styled";
import { useMedia } from "use-media";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isToggleMenu, setIsToggleMenu] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const [isScroll, setIsScroll] = useState(true);

    const toggleRef = useRef(null);
    const isMobile = useMedia({ maxWidth: "767px" });
    const isTablet = useMedia("(min-width: 768px) and (max-width: 1279px)");

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY < 8);
            if (isMobile) {
                setIsTop(window.scrollY < 200);
            } else if (isTablet) {
                setIsTop(window.scrollY < 300);
            } else {
                setIsTop(window.scrollY < 400);
            }
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
                $scroll={!isScroll}
                $burger={isMenuOpen}
                $top={isTop}>
                <a
                    href='https://ljuzifer.github.io/ape-project/'
                    aria-label='Logo of Company'
                    rel='noopener norefferer nofollow'>
                    <LogoDesktop $scroll={!isScroll} $burger={isMenuOpen}>
                        <Logo />
                    </LogoDesktop>
                </a>

                <MenuDesktop
                    $top={isTop}
                    $burger={isMenuOpen}
                    $toggle_open={isToggleMenu}>
                    <button
                        id='toggle'
                        type='button'
                        onClick={
                            isMobile
                                ? !isMenuOpen
                                    ? openModal
                                    : closeModal
                                : handleToggle
                        }>
                        {isMenuOpen || isToggleMenu ? "close" : "menu"}
                    </button>
                    <nav>
                        <ul>
                            <li>
                                <a
                                    href='https://discord.com/'
                                    target='_blanck'
                                    aria-label='Discord link'
                                    rel='noopener norefferer nofollow'>
                                    <Discord />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://opensea.io/'
                                    target='_blanck'
                                    aria-label='OpenSea link'
                                    rel='noopener norefferer nofollow'>
                                    <OpenSea />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://twitter.com/'
                                    target='_blanck'
                                    aria-label='X link'
                                    rel='noopener norefferer nofollow'>
                                    <Twitter />
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
                    toggleRef={toggleRef}
                />
            )}
        </header>
    );
}

export default Header;
