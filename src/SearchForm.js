import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <input type="search" placeholder="Enter a city..." className="rounded" />
      <button className="btn btn-light">Search</button>
      <button className="btn btn-light">Find your city</button>
    </div>
  );
}
