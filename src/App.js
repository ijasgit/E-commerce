import React from "react";
import { useEffect } from "react";
import "./App.css";
// import datas from "./data";
// import { useSelector, useDispatch } from "react-redux";
// import { addTocart, updateQty } from "./Cardslice";
// import { useNavigate } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import IconButton from "@mui/material/IconButton";
import Header from "./Header";
import Footer from "./Footer";
import UncontrolledExample from "./UncontrolledExample";
import Product from "./Product";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div class="sticky-top">
        <Header />
      </div>
      <div className="bodycontainer">
        <UncontrolledExample />
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
