import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import './FilterableProductsTable.css';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      StockCheckDisplay: true,
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };

  updateOnlyStockedProducts = (event) => {
    console.log(event.target.checked);
    this.setState({
      StockCheckDisplay: event.target.checked,
    });
  };

  handleFiltersProducts = (event) => {
    const filtered = this.props.products.filter((product) => {
      if (this.state.StockCheckDisplay && !product.stocked) {
        return false;
      }
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return filtered;
  };

  render() {
    const filteredArray = this.handleFiltersProducts();
    return (
      <div className="App">
        <SearchBar
          searched={this.state.search}
          onEdit={this.handleInputChange}
          onlyStocked={this.state.StockCheckDisplay}
          CheckboxChange={this.updateOnlyStockedProducts}
        />
        <ProductTable products={filteredArray} />
      </div>
    );
  }
}

export default FilterableProductTable;
