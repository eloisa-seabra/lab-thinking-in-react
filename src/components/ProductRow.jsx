import React from 'react';

const ProductRow = (props) => {
  return (
    <tr key={props.name}>
      <div className="row">
        <div
          className="details"
          style={{ color: props.stocked ? 'black' : 'red' }}
        >
          <td> {props.name} </td>
          <td> {props.price} </td>
        </div>
      </div>
    </tr>
  );
};

export default ProductRow;
