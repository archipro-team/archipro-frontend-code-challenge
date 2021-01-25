import React from "react";

function Search({
  searchQuery,
  searchBy,
  onSearchQueryChange,
  onSearchByChange,
}) {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="form-group">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      <div className="col-md-4">
        <select
          className="form-control"
          value={searchBy}
          onChange={(e) => onSearchByChange(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
