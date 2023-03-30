import React from "react";

const Card_b = ({title,intext,Btitle})  => {
return (
    <div className="Cardb-main"> 
    <div className="ctitle">{Btitle}</div>
      <div className="cardt-text">Available Products</div>
        <ul className="bitem-list">
        <li className="bitem">Item 1</li>
        <li className="bitem">Item 2</li>
        <li className="bitem">Item 3</li>
        </ul>
    </div>
)
}

export default Card_b;