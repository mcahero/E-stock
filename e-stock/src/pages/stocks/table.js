import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { format } from 'date-fns';

export default function Table({ products, updateProductQuantity, setProducts }) {
  const [quantities, setQuantities] = useState({});
  const [isFocused, setIsFocused] = useState(false);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const handleQuantityKeyPress = (event, productId, quantity) => {
    if (event.key === "Enter") {
      updateProductQuantity(productId, quantity);

      const updatedProducts = products.map((product) => {
        if (product.id === productId && quantity === 0) {
          return null; // remove product if quantity becomes zero
        } else if (product.id === productId) {
          return { ...product, quantity }; // update product quantity
        } else {
          return product;
        }
      });

      const filteredProducts = updatedProducts.filter((product) => product !== null);
      setProducts(filteredProducts); // update products state

      setIsFocused(false); // exit the input field
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Sort products by name
  const sortedProducts = products.sort((a, b) => a.productName.localeCompare(b.productName));

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
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{format(new Date(product.dateCreated), 'dd-MM-yyyy')}</td>
            <td>{format(new Date(product.expiryDate), 'dd-MM-yyyy')}</td>
            <td>
              <input
                ref={inputRef}
                type='number'
                value={quantities[product.id] || product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                onKeyPress={(e) => handleQuantityKeyPress(e, product.id, e.target.value)}
                style={{ color: "#029801", border:0, width:"50px", fontSize:"16px", textAlign:"center" }}
                onFocus={() => setIsFocused(true)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
