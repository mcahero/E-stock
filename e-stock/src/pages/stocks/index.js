import './styles.css'
import Sidebar from '../../sidebar'
import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';
import AddProductModal from './AddProductModal';


  export default function Stocks() {
    const [showModal, setShowModal] = useState(false);
  
    const handleAddProductClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <div className={`AppContainer ${showModal ? 'blur' : ''}`}>

      <div className='AppContainer'>
        <Sidebar />
        <div className="stocks">

          <div className='container'>

            <div className='header'>
              <p>In Stock</p>

              <div className='search-container'>
                <input className='input' placeholder='Quick Search' />
                <FaSearch className='search-icon' />
              </div>

              <p>Filter</p>

              <div className='select-container'>
                <select className='select'>
                  <option value='all'>All</option>
                  <option value='in-stock'>In Stock</option>
                  <option value='out-of-stock'>Out of Stock</option>
                </select>
              </div>
            
              <div className='actions-container'>
                <button className='add-product-button' onClick={handleAddProductClick}>
                  Add Product
                </button>
              </div>

            </div>
            <div className='table-container'>

            </div>

          </div>


        </div> 
    

        <AddProductModal showModal={showModal} handleCloseModal={handleCloseModal} />

      </div>


    </div>
  )
}
