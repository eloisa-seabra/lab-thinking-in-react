import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div className="width">
      <table className="table">
        <thead>
          <tr className="header">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <ProductRow
                name={product.name}
                price={product.price}
                stocked={product.stocked}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
