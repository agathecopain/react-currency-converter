import React from "react";

const Search = ({ search, onSearch, data, onFiltered }) => {
  function filteredCurrency(e) {
    const value = e.target.value.toLowerCase();
    onSearch(value);
    onFiltered(
      [...data].filter((el) => el.description.toLowerCase().includes(value))
    );
  }
  return (
    <div className="grid gap-2">
      <h2>Chercher une devise</h2>
      <input
        type="text"
        placeholder="Votre recherche"
        className="p-2.5 text-lg border border-gray-500 rounded-lg"
        value={search}
        onChange={filteredCurrency}
      />
    </div>
  );
};

export default Search;
