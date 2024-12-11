import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search anything here..."
        className="search"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
      <i className="fa-solid fa-search"></i>
    </div>
  );
}
