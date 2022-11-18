import React from "react";

const _header = () => {
  return (
    <header>
      <div className="container">
        <form id="form">
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="search"
          />
        </form>
      </div>
    </header>
  );
};

export default _header;
