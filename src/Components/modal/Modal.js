import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
    // const body = document.querySelector("body");
    // body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
    // const body = document.querySelector("body");
    // body.style.overflow = "auto";
  }

  handleEsc = (e) => {
    if (e.code === "Escape") {
      this.props.hideModal(e);
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.hideModal(e);
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propType = {
  largeImage: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

// export default Modal;
