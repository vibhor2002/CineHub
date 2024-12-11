import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header({ setQuery }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="subheading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <h1>CineHub</h1>
        </div>
        <div className="search-bar">
          <SearchBar setQuery={setQuery} />
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/series">TV Shows</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/top">Top Rated</Link>
        </div>
      </div>
    </header>
  );
}
