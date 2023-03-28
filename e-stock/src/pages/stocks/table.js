import React, { useState } from 'react';
import './styles.css';
import { format } from 'date-fns';

export default function Table({ products, updateProductQuantity }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
    updateProductQuantity(productId, quantity);
  };

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
          <td>{format(new Date(product.dateCreated), 'dd-MM-yyyy')}</td>
          <td>{format(new Date(product.expiryDate), 'dd-MM-yyyy')}</td>
          <td>
            <input
              type='number'
              value={quantities[product.id] || product.quantity}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ color: "#029801", border:0, width:"50px", fontSize:"16px" }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}
