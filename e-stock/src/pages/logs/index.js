import './styles.css'
import "@fontsource/inter";
import Sidebar from '../../sidebar'
import React, { useState } from 'react';
import ProductTable from './table';
import { isWithinInterval, addWeeks } from 'date-fns';


export default function Logs() {
  const [showModal] = useState(false);
  const [products] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  
  
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
      <Sidebar />
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
