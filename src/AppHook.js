import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
// import ImageGallery from "./Components/imageGallery/ImageGallery";
// import SearchBar from "./Components/searchBar/SearchBar";
import ImageGalleryHook from "./Components/imageGallery/ImageGalleryHook";
import SearchBarHook from "./Components/searchBar/SearchBarHook";

const AppHook = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
  };

  const increasePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBarHook onSubmit={handleFormSubmit} />
      <ImageGalleryHook query={query} page={page} increasePage={increasePage} />
      <ToastContainer autoClose={3000} />
    </>
  );
};

AppHook.propType = {
  query: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
export default AppHook;
