import React from 'react';
import { useState } from 'react';
import "@fontsource/inter";
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default function AddProductModal({ showModal, handleCloseModal, addProduct }) {

  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quantity, setQuantity] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      id: Date.now(),
      productName: productName,
      category: category,
      expiryDate: expiryDate,
      quantity: quantity,
      dateCreated: new Date(),
    };
    
    addProduct(product);
    handleCloseModal();
  };
  

  return (
    showModal && (
      <div className='modal-overlay' onClick={handleCloseModal}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>

          <div className='modal-content'>
            <div className='modal-header'>
              <h2>Add Product</h2>
              <button className='close-modal-button' onClick={handleCloseModal}>
                &times;
              </button>
            </div>

            <div className='form'>
              <form onSubmit={handleSubmit}>
                <input className='modal-input' type="text" value={productName} onChange={(event) => setProductName(event.target.value)} placeholder="Product Name" />

                <div className='expiry'>
                  <select className='categories' placeholder="Categories" value={category} onChange={(event) => setCategory(event.target.value)} >
                    <option value=''>Categories</option>
                    <option value='Canned Goods'>Canned Goods</option>
                    <option value='Junk Foods'>Junk Foods</option>
                    <option value='Drinks'>Drinks</option>
                    <option value='Hygiene Kit'>Hygiene Kit</option>
                    <option value='Soon-to-expire'>Soon-to-expire</option>
                  </select>
                </div>

                <div className='expiry'>
                  <input placeholder="Expiry Date" className='expiry-input' value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} />
                  <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
                </div>

                <input className='modal-input' type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder="Quantity" />

                <button className='modal-button' type="submit">Add Product</button>

              </form>
            </div>
          </div>

        </div>
      </div>
    )
  );
}
