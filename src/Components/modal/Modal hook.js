import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalHook = ({ hideModal, largeImage }) => {
  // const [state, setState]= useState({})

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      hideModal(e);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.code === "Escape") {
        hideModal(e);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [hideModal]);

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
ModalHook.propType = {
  largeImage: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};
export default ModalHook;
