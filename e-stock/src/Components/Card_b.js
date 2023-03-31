import React from "react";

const Card_b = ({Btitle})  => {
  const Products = JSON.parse(localStorage.getItem("products")) || []; // get stored products from local storage, default to empty array if null
  
  return (
    <div className="Cardb-main"> 
      <div className="ctitle">{Btitle}</div>
      <div className="cardt-text">Available Products</div>
      <div className="itemContainer">
      <ul className="bitem-list">
        {Products && Products.map((product) => ( // check if storedProducts is not null before calling map
          <li className="bitem" key={product.name}>
           
            <div className="pname-div">
              <p className="pname">{product.productName}</p>
              </div>
          
          
            <div className="quanti-div">
              <p className="quanti">{product.quantity}</p>
              </div>
           
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Card_b;
