import React from "react";

const CardC = ({ Ctitle }) => {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const totalQuantity = products.reduce((total, product) => total + parseInt(product.quantity), 0);

  return (
    <div className="Cardc-main">
      <div> 
        <div className="ctitle">{Ctitle}</div>
        <div className="cardt-text">Stocks (Overall)</div>
        <div className="ca-text">{totalQuantity}</div>
      </div>
    </div>
  );
};

export default CardC;
