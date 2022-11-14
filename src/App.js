import React, { useState } from "react";
import "./App.css";
import Cart from "./cart";
import datas from "./data";

function App() {
  const [items, setitem] = useState(datas);
  var [cartItems, setcart] = React.useState([]);


  // var [btn, setbutton] = React.useState(true);
  // function incqty(data) {
  //   data.qty++;
  //   setitem([...items]);
  //   console.log(data);
  // }
  // function decqty(data) {
  //   if (data.qty > 0) {
  //     data.qty--;
  //     setitem([...items]);
  //     console.log(data);
  //   }
  // }

  function AddToCart(data) {
    data.qty++;
    setitem([...items]);
    setcart((prevalue) => [...prevalue, data]);
    // setbutton(true);
  }

  return (
    <div>
      {items.map((data) => {
        return (
          <div key={data.key}>
            <h1>{data.name}</h1>
            {/* <h1>{data.qty}</h1> */}
            {/* <button onClick={() => incqty(data)}>+</button>
            <button onClick={() => decqty(data)}>-</button> */}
            <button onClick={() => AddToCart(data)}>Add Cart</button>
          </div>
        );
      })}
      <Cart cartdata={cartItems} />
    </div>
  );
}

export default App;
