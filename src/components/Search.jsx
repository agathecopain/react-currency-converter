import React from "react";

const Search = ({ search, onSearch }) => {
  function filteredCurrency(e) {
    const value = e.target.value.toLowerCase();
    onSearch(value);
  }
  return (
    <div className="flex-col gap-1.5">
      <h2>Chercher une devise</h2>
      <input
        type="text"
        placeholder="Votre recherche"
        className="p-2.5 text-lg border border-gray-500 rounded-lg w-full"
        value={search}
        onChange={filteredCurrency}
      />
    </div>
  );
};

export default Search;
