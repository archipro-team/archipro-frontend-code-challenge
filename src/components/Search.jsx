import React from "react";

function Search({ value, onChange }) {
  return (
    <div className="form-group">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
}

export default Search;
