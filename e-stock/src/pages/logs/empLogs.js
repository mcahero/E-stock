import './styles.css'
import "@fontsource/inter";
import React, { useState } from 'react';
import ProductTable from './table';
import { isWithinInterval, addWeeks } from 'date-fns';
import EmployeeSidebar from '../../EmployeeSidebar';

export default function EmpLogs() {
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
  }
   else if (selectedFilter === 'Soon-to-expire') {
    const filtered = products.filter((product) => isWithinInterval(new Date(product.expiryDate), {
      start: new Date(),
      end: addWeeks(new Date(), 3)
    }));
    setFilteredProducts(filtered);
  }
};

  

  return (
    <div className={`AppContainer ${showModal ? 'blur' : ''}`}>
      <EmployeeSidebar />
      <div className="stocks">
        <div className='container'>
          <div className='header'>
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
            </div>
          </div>
          <div className='table-container'>
          <ProductTable products={filteredProducts} />

          </div>
        </div>
      </div>
    </div>
  );
}
