import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
// import ImageGallery from "./Components/imageGallery/ImageGallery";
import SearchBar from "./Components/searchBar/SearchBar";
import ImageGalleryHook from "./Components/imageGallery/ImageGallery hook";

class App extends Component {
  state = {
    query: "",
    page: 1,
  };

  handleFormSubmit = (query) => {
    this.setState({ query, page: 1 });
  };

  increasePage = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { query, page } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGalleryHook
          query={query}
          page={page}
          increasePage={this.increasePage}
        />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

App.propType = {
  query: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
// export default App;
