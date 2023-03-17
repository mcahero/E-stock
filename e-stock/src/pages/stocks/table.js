import React from 'react';
import './styles.css';
import { format } from 'date-fns';

export default function Table({ products }) {
  return (
    <table className='table'>
    <thead>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Categories</th>
        <th>Date Added</th>
        <th>Expiry Date</th>
        <th>Quantity</th>
       
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.productName}</td>
          <td>{product.category}</td>
          <td>{format(product.dateCreated, 'dd MMMM yyyy')}</td>
          <td>{product.expiryDate}</td>
          <td style={{color:"#029801"}}>{product.quantity}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
  
  );
}
