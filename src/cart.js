import React from "react";

function Cart(props) {
  const cartdata = props.cartdata;

  var [newcart, setnewcart] = React.useState([cartdata]);

  function incqty(data) {
    data.qty++;
    setnewcart([...newcart]);
    console.log(data);
  }

  function decqty(data) {
    if (data.qty > 0) {
      data.qty--;
      setnewcart([...newcart]);
      console.log(data);
    }
  }

  return cartdata.map((data) => {
    return (
      <div>
        <h1>{data.name}</h1>
        <h1>{data.qty}</h1>
        <button onClick={() => incqty(data)}>+</button>
        <button onClick={() => decqty(data)}>-</button>
      </div>
    );
  });
}

export default Cart;
