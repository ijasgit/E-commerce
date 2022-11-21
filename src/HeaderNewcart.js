import React from "react";
import { useNavigate } from "react-router-dom";


function HeaderNewcart(){
    const navigate=useNavigate()
    return(
        <div className="NewcartMainContainer ">
            <h1 className="firstchild" onClick={() => navigate("/app")}>HOME</h1><h1 className="secondchild" >/CART</h1>
        </div>
    )
}

export default HeaderNewcart;