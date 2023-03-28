import React, { useState } from 'react';
import './styles.css';
import Sidebar from '../../sidebar';
import { FaSearch } from 'react-icons/fa';
import AddProductModal from './AddProductModal';
import ProductTable from './table';
import { isWithinInterval, addWeeks } from 'date-fns';


export default function Stocks() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleAddProductClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);

    if (filteredProducts === products) {
      setFilteredProducts([...products, product]);
    } else if (filteredProducts[0].category === product.category) {
      setFilteredProducts([...filteredProducts, product]);
    }
  };

  const updateProductQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);

    if (filteredProducts === products) {
      setFilteredProducts(updatedProducts);
    } else {
      const updatedFilteredProducts = filteredProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        } else {
          return product;
        }
      });

      setFilteredProducts(updatedFilteredProducts);
    }
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;

    if (selectedFilter === 'all') {
      setFilteredProducts(products);
    } else if (selectedFilter === 'Canned Goods') {
      const filtered = products.filter((product) => product.category === 'Canned Goods');
      setFilteredProducts(filtered);
    } else if (selectedFilter === 'Junk Foods') {
      const filtered = products.filter((product) => product.category === 'Junk Foods');
      setFilteredProducts(filtered);
    } else if (selectedFilter === 'Drinks') {
      const filtered = products.filter((product) => product.category === 'Drinks');
      setFilteredProducts(filtered);
    } else if (selectedFilter === 'Hygiene Kit') {
      const filtered = products.filter((product) => product.category === 'Hygiene Kit');
      setFilteredProducts(filtered);
    } else if (selectedFilter === 'Soon-to-expire') {
      const filtered = products.filter((product) =>
        isWithinInterval(new Date(product.expiryDate), {
          start: new Date(),
          end: addWeeks(new Date(), 3),
        })
      );
      setFilteredProducts(filtered);
    }
  };
  

  return (
    <div className={`AppContainer ${showModal ? 'blur' : ''}`}>
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
              <select className='select' onChange={handleFilterChange}>
                  <option value='all'>All</option>
                  <option value='Canned Goods'>Canned Goods</option>
                  <option value='Junk Foods'>Junk Foods</option>
                  <option value='Drinks'>Drinks</option>
                  <option value='Hygiene Kit'>Hygiene Kit</option>
                  <option value='Soon-to-expire'>Soon-to-expire</option>
                </select>
              </div>
            <div className='actions-container'>
              <button className='add-product-button' onClick={handleAddProductClick}>
                Add Product
              </button>
            </div>
          </div>
          <div className='table-container'>
          <ProductTable products={filteredProducts} updateProductQuantity={updateProductQuantity} />

          </div>
        </div>
      </div>
      <AddProductModal showModal={showModal} handleCloseModal={handleCloseModal} addProduct={addProduct} />
    </div>
  );
}