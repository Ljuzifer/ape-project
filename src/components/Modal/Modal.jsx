import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import Copy from "../Copy/Copy";
import { MobileList, ModalContent } from "./Modal.styled";

import modalStyles from "../../stylesheets/modal-styles";
import "../../stylesheets/modal-transition.css";

ReactModal.setAppElement("#root");

export default function Modal({ state, onClose }) {
    return (
        <ReactModal
            isOpen={state}
            onRequestClose={onClose}
            style={modalStyles}
            contentLabel={"Site navigation"}
            preventScroll={false}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={800}>
            <ModalContent>
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
            </ModalContent>
        </ReactModal>
    );
}

Modal.propTypes = {
    state: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
