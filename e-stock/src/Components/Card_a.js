import React from "react";

import cartcon from '../images/cart.png'

const Card_a = ({Atitle})  => {
return (
    <div className="Carda-main">
    <img src={cartcon} alt=" Cart" className="cart_main" img/> 
    <div className="main-title">{Atitle}</div>
    <div className="main-text">Today's Sales</div>
      <ul className="item-list">
        <li className="aitem">Item 1</li>
        <li className="aitem">Item 2</li>
        <li className="aitem">Item 3</li>
        <li className="aitem">Item 4</li>
      </ul>
      <img src={cartcon} alt=" Cart" className="cart_main" img/> 
    </div>
)
}

export default Card_a;