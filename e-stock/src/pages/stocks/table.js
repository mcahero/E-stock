import React from 'react';
import './styles.css';
import { format } from 'date-fns';

export default function Table({ products }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Categories</th>
          <th>Expiry Date</th>
          <th>Quantity</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{product.expiryDate}</td>
            <td>{product.quantity}</td>
            <td>{format(product.dateCreated, 'dd MMMM yyyy')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
