import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Copy from "../Copy/Copy";
import { root } from "../../stylesheets/root";
import { MobileList } from "./Modal.styled";

ReactModal.setAppElement("#root");

const customStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "none",
        zIndex: 555,
        overflow: "hidden",
    },

    content: {
        padding: "294px 72px 0",
        width: "100vw",
        height: "100vh",
        margin: "auto",
        overflow: "auto",
        inset: 0,
        border: "none",
        backgroundColor: `${root.colors.mainDarkColor}`,
    },
};

export default function Modal({ state, onClose }) {
    return (
        <ReactModal
            isOpen={state}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel={"Site navigation"}
            preventScroll={false}
            shouldCloseOnOverlayClick={true}>
            <MobileList onClick={onClose}>
                <li>
                    <a href='#about'>about</a>
                </li>
                <li>
                    <a href='#m-map'>m-map</a>
                </li>
                <li>
                    <a href='#faq'>faq</a>
                </li>
                <li>
                    <a href='#collection'>arts</a>
                </li>
                <li>
                    <a href='#mint'>mint</a>
                </li>
            </MobileList>
            <Copy />
        </ReactModal>
    );
}

Modal.propTypes = {
    state: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
