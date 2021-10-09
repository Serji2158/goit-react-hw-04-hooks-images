import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import s from "../imageGalleryItem/ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: "",
  };

  toggleModal = (e) => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
      largeImage: e.target.id || "",
    }));
  };

  render() {
    return (
      <>
        {this.props.gallery.map((picture) => (
          <li className={s.imageGalleryItem} key={picture.id}>
            <img
              className={s.imageGalleryItemImage}
              src={picture.webformatURL}
              alt=""
              id={picture.largeImageURL}
              onClick={this.toggleModal}
            />
          </li>
        ))}
        {this.state.showModal && (
          <Modal
            hideModal={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propType = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
