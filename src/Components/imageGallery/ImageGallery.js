import React, { Component } from "react";
import PropTypes from "prop-types";
// import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import api from "./../../service/API";
import s from "./ImageGallery.module.css";
import ImageGalleryItemHook from "../imageGalleryItem/ImageGalleryItem hook";

class ImageGallery extends Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
    isHidden: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (nextQuery !== prevQuery || nextPage !== prevPage) {
      this.setState({ loading: true });
      this.updateGallery();
    }

    if (this.state.gallery !== prevState.gallery && this.props.page !== 1) {
      this.scroll();
    }
  }

  updateGallery = () => {
    api
      .fetchGallery(this.props.query, this.props.page)
      .then(({ hits }) => {
        this.setState((prevState) => ({
          gallery:
            this.props.page === 1 ? [...hits] : [...prevState.gallery, ...hits],
          isHidden: true,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  scroll = () => {
    const element = document.body;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  render() {
    const { gallery, loading, error } = this.state;
    const { query } = this.props;
    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading && <p>Loading...</p>}
        {!query && <div className={s.infoBox}>Enter you request, please.</div>}
        {gallery.length > 0 && (
          <ul className={s.ImageGallery}>
            <ImageGalleryItemHook gallery={this.state.gallery} />
          </ul>
        )}
        {this.state.isHidden && (
          <button
            type="button"
            className={s.Button}
            onClick={this.props.increasePage}
          >
            LOAD MORE
          </button>
        )}
      </>
    );
  }
}

ImageGallery.propType = {
  query: PropTypes.string.isRequired,
  increasePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

// export default ImageGallery;
