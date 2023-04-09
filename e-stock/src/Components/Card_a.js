import React from "react";
import cartcon from '../images/cart.png'

const Card_a = ({Atitle}) => {
  const Products = JSON.parse(localStorage.getItem("products")) || [];

  const calculateQuantityDiff = (product) => {
    return product.originalQuantity - product.quantity;
  }

  return (
    <div className="Carda-main">
      <img src={cartcon} alt=" Cart" className="cart_main" img/> 
      <div className="main-title">{Atitle}</div>
      <div className="main-text">Today's Sales</div>
      <div className="aitemContainer">
        <ul className="item-list">
          {Products.map((product) => (
            <li className="item-list" key={product.name}>
              {calculateQuantityDiff(product) >= 1 && (
                <div className="aitem">
                  <div className="aitem-a">
                    <p>{product.productName}</p>
                  </div> 
                  <div className="aitem-q">
                    <p>{calculateQuantityDiff(product)}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <img src={cartcon} alt=" Cart" className="cart_main" img/> 
    </div>
  );
}

export default Card_a;
