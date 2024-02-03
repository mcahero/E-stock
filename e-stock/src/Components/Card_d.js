import React from "react";

const CardD = ({ tbeext, Dtitle }) => {
  const Products = JSON.parse(localStorage.getItem("products")) || []; // get stored products from local storage, default to empty array if null

  // Filter products that are expiring within 3 weeks
  const expiringProducts = Products.filter((product) => {
    const expiringDate = new Date(product.expiryDate);
    const today = new Date();
    const diffTime = Math.abs(expiringDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 21; // 3 weeks is 21 days
  });

  // Sum the quantities of expiring products
  const totalQuantity = expiringProducts.reduce((acc, product) => {
    return acc + parseInt(product.quantity); // ensure quantity is parsed as an integer before summing
  }, 0);

  return (
    <div className="Cardd-main">
      <div>
        <div className="ctitle">{Dtitle}</div>
        <div className="cardt-text">To Be Expired</div>
       
        <div className="c-text ca-text">{totalQuantity}</div> {/* Display total quantity without the string "Total" */}
      </div>
    </div>
  );
};

export default CardD;
