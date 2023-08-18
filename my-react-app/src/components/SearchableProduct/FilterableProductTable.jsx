/* import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
 */

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products }) => {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        searchText={searchText}
        inStockOnly={inStockOnly}
        products={products}
        oninpuFieldChange={setSearchText}
        onStockOnly={setInStockOnly}
      />
      <ProductTable
        searchText={searchText}
        inStockOnly={inStockOnly}
        products={products}
        oninpuFieldChange={setSearchText}
        onStockOnly={setInStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
