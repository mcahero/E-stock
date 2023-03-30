import React from 'react';
import './styles.css';
import { format } from 'date-fns';

export default function Table({ products }) {
  return (
    <table className='table'>
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Transaction Date</th>
        <th>Quantity Added</th>
        <th>Quantity Removed</th>
        <th>Modified By</th>
       
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
