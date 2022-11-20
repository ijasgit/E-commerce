import React, { useState } from "react";
import "./App.css";
// import Cart from "./cart";
import datas from "./data";
import { useSelector, useDispatch } from "react-redux";
import { addTocart, updateQty } from "./Cardslice";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const navto = useNavigate();
  const [items, setitem] = useState(datas);
  // const [cartItems, setcart] = React.useState([]);
  const state = useSelector((state) => state.cart);
  console.log("app", state);
  const dispatch = useDispatch();

  function AddToCart(data) {
    console.log(state);

    var bool = state.cartitem.includes(data);
    console.log("bool", bool);
    if (bool === false) {
      data.qty++;
      dispatch(addTocart([...state.cartitem, data]));
    } else {
      console.log("else is running");
      // data.qty++;
      // dispatch(addTocart([...state.cartitem]));
      var newqty = data.qty + 1;
      dispatch(updateQty({ id: data.id, qty: newqty }));
    }
  }

  // function remove(data) {
  //   // console.log(data.id);
  //   data.qty = 0;
  //   setcart([...cartItems]);
  //   setcart((prevalue) => {
  //     return prevalue.filter((item) => {
  //       return item.id !== data.id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
      <div className="maincontainer">
        {items.map((data, index) => {
          return (
            <div key={index} className="childcontainers">
              <img
                src="https://toppng.com/uploads/preview/hp-laptop-transparent-images-png-11526908147mtxyfl2i3w.png"
                alt="images"
              />
              <h1>{data.name}</h1>
              {/* <button onClick={() => AddToCart(data)}>Add Cart</button> */}
              <button className="appAddcartbtn">
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => AddToCart(data)}
                >
                  <p>Add</p>
                  <AddShoppingCartIcon />
                </IconButton>
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
