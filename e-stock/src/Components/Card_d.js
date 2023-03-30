import React from "react";

const Card_d = ({title,tbeext,Dtitle})  => {
return (
    <div className="Cardd-main">
    <div> 
    <div className="ctitle">{Dtitle}</div>
    <div className="cardt-text">To Be Expired</div>
    <div className="cent-text">{tbeext}</div>
    <div className="c-text ca-text">30</div>
    </div>
    </div>
)
}

export default Card_d;