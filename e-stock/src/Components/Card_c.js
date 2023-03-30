import React from "react";

const Card_c = ({stockstext,Ctitle})  => {
return (
    <div className="Cardc-main">
    <div> 
    <div className="ctitle">{Ctitle}</div>
      <div className="cardt-text">Stocks (Overall)</div>
      <div className="cent-text">{stockstext}</div>
      <div className="ca-text">330</div>
    </div>
    </div>
)
}

export default Card_c;