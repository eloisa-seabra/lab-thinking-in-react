import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <div className="search-box">
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="text"
          name="name"
          placeholder="Search products"
          value={props.searched}
          onChange={props.onEdit}
        />
      </div>
      <div className="check-box">
        <input
          id="checkbox"
          name="availableProd"
          type="checkbox"
          onChange={props.updateOnlyStockedProducts}
          checked={props.StockCheckDisplay}
        />
        <label htmlFor="checkbox">Only show products on stock</label>
      </div>
    </form>
  );
};

export default SearchBar;
