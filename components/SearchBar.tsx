"use client";

import { useState } from "react";
import { SearchManfacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManfacturer
          manufacturer={manufacturer}
          setManfacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
