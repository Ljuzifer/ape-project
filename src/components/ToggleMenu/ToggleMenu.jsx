import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ToggleList, ToggleNav } from "./ToggleMenu.styled";
import { root } from "../../stylesheets/root";

function ToggleMenu({ isActive, toggleClose, isTop, isScroll }) {
    // const toggleRef = useRef(null);

    // const onClickClose = (e) => {
    //     if (e.target !== e.currentTarget) {
    //         toggleClose();
    //     }
    // };

    // useEffect(() => {
    //     const toggle = toggleRef.current;
    //     if (toggle) {
    //         toggle.addEventListener("click", onClickClose);
    //     }

    //     return () => {
    //         if (toggle) {
    //             toggle.removeEventListener("click", onClickClose);
    //         }
    //     };
    // }, [onClickClose]);

    const toggleRef = useRef(null); // Реф для відстеження DOM-елемента меню

    useEffect(() => {
        // Функція, яка перевіряє, чи клік був здійснений за межами меню
        const handleClickOutside = (event) => {
            if (
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                toggleClose();
            }
        };

        // Додаємо слухач подій, коли компонент монтується
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Прибираємо слухач подій, коли компонент демонтується, щоб уникнути витоків пам'яті
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleClose]); // Залежності ефекту

    if (isActive) {
        return (
            <ToggleNav style={{ position: !isScroll && "fixed" }}>
                <ToggleList
                    id='toggle'
                    ref={toggleRef}
                    // onClick={onClickClose}
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
