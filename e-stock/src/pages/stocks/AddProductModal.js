import React from 'react';
import { useState } from 'react';
export default function AddProductModal({ showModal, handleCloseModal }) {


    const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle adding the product to a database or state here
    console.log(`Product name: ${productName}, Categories: ${categories}, Expiry date: ${expiryDate}, Quantity: ${quantity}`);
    // Clear input fields
    setProductName('');
    setCategories('');
    setExpiryDate('');
    setQuantity('');
  }

  return (
    showModal && (
      <div className='modal-overlay' onClick={handleCloseModal}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h2>Add Product</h2>
          </div>
       
            <button className='close-modal-button' onClick={handleCloseModal}>
              &times;
            </button>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} placeholder="Product Name" />
                    </label>
                    <br />
                    <label>
                        <input type="text" value={categories} onChange={(event) => setCategories(event.target.value)} placeholder="Categories" />
                    </label>
                    <br />
                    <label>
                        <input type="date" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} placeholder="Expiry Date" />
                    </label>
                    <br />
                    <label>
                        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="Quantity" />
                    </label>
                    <br />
                    <button type="submit" onClick={handleCloseModal}>Add Product</button>
                </form>
            </div>
        
        </div>
      </div>
    )
  );
}
