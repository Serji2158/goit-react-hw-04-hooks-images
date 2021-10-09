import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };
  handleQueryChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      return toast.error("Put your query,please !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={s.searchBar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propType = {
  onSubmit: PropTypes.func,
};
// export default SearchBar;
