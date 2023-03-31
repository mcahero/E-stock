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

    if(!category.trim()){
      alert('Please select Category');
      return;
    }
  
    // Check if productName is empty or contains only spaces
    if (!productName.trim()) {
      alert('Please enter a product name');
      return;
    }
  
    // Check if expiryDate is a valid date
    const expiryDateObj = new Date(expiryDate);
    if (isNaN(expiryDateObj.getTime())) {
      alert('Please enter a valid expiry date');
      return;
    }
  
    // Check if quantity is greater than or equal to 1
    if (quantity < 1) {
      alert('Please enter a quantity of at least 1');
      return;
    }
  
    // Create the product object and add it
    const product = {
      id: Date.now(),
      productName: productName,
      category: category,
      expiryDate: expiryDate,
      quantity: quantity,
      dateCreated: new Date(),
    };
  
    addProduct(product);
  
    // Clear the form inputs and close the modal
    setProductName('');
    setCategory('');
    setExpiryDate('');
    setQuantity('');
  
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
                    <option value='Other'>Other</option>  
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