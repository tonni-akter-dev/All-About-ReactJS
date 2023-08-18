/* export function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
 */
import React from "react";

const SearchBar = ({
  products,
  oninpuFieldChange,
  onStockOnly,
  searchText,
  inStockOnly,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your product here"
        onChange={(e) => oninpuFieldChange(e.target.value)}
        value={searchText}
      />
      <input
        type="checkbox"
        onChange={(e) => onStockOnly(e.target.checked)}
        value={inStockOnly}
      />
      <span>Only show products in stock</span>
    </div>
  );
};

export default SearchBar;
