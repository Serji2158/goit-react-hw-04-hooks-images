import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import api from "../../service/API";
import s from "./ImageGallery.module.css";
import ImageGalleryItemHook from "../imageGalleryItem/ImageGalleryItem hook";

const ImageGalleryHook = ({ increasePage, query, page }) => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const scroll = () => {
    const element = document.body;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    const updateGallery = () => {
      api
        .fetchGallery()
        .then(({ hits }) => {
          setGallery((prev) => (page === 1 ? [...hits] : [...prev, ...hits]));
          setIsHidden(true);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    // if (query !== prev.query || page !== prev.page) {
    //   setLoading(true);
    //   updateGallery();
    // }

    // if (gallery !== prev.gallery && page !== 1) {
    //   scroll();
    // }
  }, [page, query, gallery]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <p>Loading...</p>}
      {!query && <div className={s.infoBox}>Enter you request, please.</div>}
      {gallery.length > 0 && (
        <ul className={s.ImageGallery}>
          <ImageGalleryItemHook gallery={gallery} />
        </ul>
      )}
      {isHidden && (
        <button type="button" className={s.Button} onClick={increasePage}>
          LOAD MORE
        </button>
      )}
    </>
  );
};

ImageGalleryHook.propType = {
  query: PropTypes.string.isRequired,
  increasePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default ImageGalleryHook;
