import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";

const SearchBarHook = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast.error("Put your query,please !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
          value={query}
        />
      </form>
    </header>
  );
};
SearchBarHook.propType = {
  onSubmit: PropTypes.func,
};
export default SearchBarHook;
