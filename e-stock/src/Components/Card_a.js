import React from "react";
import cartcon from '../images/cart.png'

const Card_a = ({Atitle}) => {
  const Products = JSON.parse(localStorage.getItem("products")) || [];

  const calculateQuantityDiff = (product) => {
    return product.originalQuantity - product.quantity;
  }

  const sortedProducts = Products.map((product) => {
    return {
      ...product,
      modifiedQuantity: calculateQuantityDiff(product),
      modified: new Date(product.modifiedDate).getTime()
    };
  }).sort((a, b) => b.modifiedQuantity - a.modifiedQuantity);

  return (
    <div className="Carda-main">
      <img src={cartcon} alt=" Cart" className="cart_main" img/> 
      <div className="main-title">{Atitle}</div>
      <div className="main-text">Today's Sales</div>
      <div className="aitemContainer">
        <ul className="item-list">
          {sortedProducts.map((product) => (
            <li className="item-list" key={product.name}>
              {product.modifiedQuantity >= 1 && (
                <div className="aitem">
                  <div className="aitem-a">
                    <p>{product.productName}</p>
                  </div> 
                  <div className="aitem-q">
                    <p>{product.modifiedQuantity}</p>
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
