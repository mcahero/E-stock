import React from "react";

const Card_b = ({Btitle})  => {
  const Products = JSON.parse(localStorage.getItem("products")) || []; // get stored products from local storage, default to empty array if null
  
  return (
    <div className="Cardb-main"> 
      <div className="ctitle">{Btitle}</div>
      <div className="cardt-text">Available Products</div>
   
      <ul className="bitem-list">
        {Products && Products.map((product) => ( // check if storedProducts is not null before calling map
          <li className="bitem" key={product.name}>
            <p>{product.productName}</p>
            <p >{product.quantity}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Card_b;
