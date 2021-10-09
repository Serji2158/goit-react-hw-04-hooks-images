import React, { useState } from "react";
import PropTypes from "prop-types";
// import Modal from "../modal/Modal";
import s from "../imageGalleryItem/ImageGalleryItem.module.css";
import ModalHook from "../modal/Modal hook";

const ImageGalleryItemHook = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  const toggleModal = (e) => {
    setShowModal((prev) => !prev);
    setLargeImage(e.target.id || "");
  };

  return (
    <>
      {gallery.map((picture) => (
        <li className={s.imageGalleryItem} key={picture.id}>
          <img
            className={s.imageGalleryItemImage}
            src={picture.webformatURL}
            alt=""
            id={picture.largeImageURL}
            onClick={toggleModal}
          />
        </li>
      ))}
      {showModal && (
        <ModalHook hideModal={toggleModal} largeImage={largeImage} />
      )}
    </>
  );
};

ImageGalleryItemHook.propType = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItemHook;
